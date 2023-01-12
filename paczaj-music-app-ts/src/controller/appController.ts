import { Request, Response } from 'express';
import {
  Artist,
  WikipediaDataTypes,
  SingleArtist,
  Youtube,
  Albums,
  DatabaseStatistics,
  ReleaseInfoTypes,
  TrackTypes,
} from '../types/types';
import { db } from '../db/db';
import {
  allArtistQuery,
  sigleArtistQuery,
  youtubeQuery,
  tracksQuery,
  releaseQuery,
  databaseStatisticsQuery,
} from '../query/query';

import axios from 'axios';
import * as cheerio from 'cheerio';

class AppController {
  static async getWiki(wiki_id?: string) {
    let postTitles: string[] = [];
    const wiki: WikipediaDataTypes = {
      description: undefined,
    };
    await axios
      .get(`https://en.wikipedia.org/wiki/${wiki_id}`)

      .then((response) => {
        // console.log(response);

        if (response.status == 200) {
          const $ = cheerio.load(response.data);
          $(' div.mw-parser-output>p').each((_idx, el) => {
            const postTitle = $(el).html();
            postTitles.push(postTitle!);
          });

          postTitles = postTitles.filter((el: string) => el.trim().length > 10);
          wiki.description = [postTitles[0], postTitles[1], postTitles[2]].join(
            '<br/>'
          );
          wiki.description = wiki.description.replace(/\<a .+?>/g, '');
          wiki.description = wiki.description.replace(/<\/a>/g, '');
          wiki.description = wiki.description.replace(/\<sup .+?\/sup>/g, '');
          wiki.description = wiki.description.replace(/\\/g, '').trim();
          wiki.status = response.status;
        }
      })
      .catch((error: Error) => {
        wiki.description = error.message;
      });

    return wiki;
  }

  public static async getInitData(
    req: Request,
    res: Response
  ): Promise<Response | undefined> {
    try {
      const artists_list: Artist[] = await db.any(allArtistQuery);
      const db_statistics: DatabaseStatistics = await db.one(
        databaseStatisticsQuery
      );

      return res.status(200).json({ db_statistics, artists_list });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  }

  public static async getSingleArtist(
    req: Request,
    res: Response
  ): Promise<Response | undefined> {
    const artistId: string = req.params.artistId;

    try {
      const artistData: SingleArtist = await db.one(sigleArtistQuery, artistId);
      const youtubeMovies: Youtube[] = await db.any(youtubeQuery, artistId);
      let wiki: WikipediaDataTypes;
      if (artistData.wikipedia_suffix) {
        wiki = await AppController.getWiki(artistData.wikipedia_suffix);
      } else {
        wiki = { description: 'Brak danych', status: 404 };
      }

      artistData.wikipedia_data = wiki;

      const releases: Albums = {};
      releases.studio_albums = await db.any(
        `SELECT * FROM select_release_by_type_and_artist_id($1,$2)`,
        [artistId, 1]
      );
      releases.extended_plays = await db.any(
        `SELECT * FROM select_release_by_type_and_artist_id($1,$2)`,
        [artistId, 3]
      );
      releases.compilations = await db.any(
        `SELECT * FROM select_release_by_type_and_artist_id($1,$2)`,
        [artistId, 4]
      );

      const result = {
        artist_data: artistData,
        youtube_movies: youtubeMovies,
        releases,
      };

      return res.status(200).json(result);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  }
  static async getRelease(
    req: Request,
    res: Response
  ): Promise<Response | undefined> {
    const releaseId = req.params.releaseId;

    try {
      const releaseInfo: ReleaseInfoTypes = await db.one(
        releaseQuery,
        releaseId
      );
      const tracks: TrackTypes[] = await db.any(tracksQuery, releaseId);

      return res.status(200).json({ releaseInfo, tracks });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  }
}

export default AppController;
