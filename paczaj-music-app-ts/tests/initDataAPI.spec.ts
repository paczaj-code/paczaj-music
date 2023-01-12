import request from 'supertest';
import app from '../src/server';
import { db } from '../src/db/db';
import { allArtistQuery, databaseStatisticsQuery } from '../src/query/query';
import { Artist, DatabaseStatistics } from '../src/types/types';

describe('Tests for init-data endpoint', () => {
  let artistList: Artist[];
  let dbStatistics: DatabaseStatistics;

  beforeEach(async () => {
    artistList = await db.any(allArtistQuery);
    dbStatistics = await db.one(databaseStatisticsQuery);
  });

  it('should be error with wrong API path', async () => {
    const response = await request(app).get('/api/artists');
    expect(response.statusCode).toBe(404);
  });

  it('should return a 200 status code', async () => {
    const response = await request(app).get('/api/init-data');
    expect(response.statusCode).toBe(200);
  });

  it('should be all required fields', async () => {
    const response = await request(app).get('/api/init-data');
    const result = JSON.parse(response.text);

    expect(result.artists_list.length).toEqual(artistList.length);
    expect(result.db_statistics).toBeDefined();
  });

  it('should be proper data for artists lists', async () => {
    const artists = await db.any(allArtistQuery);
    const response = await request(app).get('/api/init-data');
    const result = JSON.parse(response.text);
    expect(response.statusCode).toBe(200);
    expect(result.artists_list[10].id).toEqual(artists[10].id);
    expect(result.artists_list[30].name).toEqual(artists[30].name);
    expect(result.artists_list[100].country).toEqual(artists[100].country);
    expect(result.artists_list[100].tags).toBeInstanceOf(Array);
  });

  it('should be proper data for statistics', async () => {
    const response = await request(app).get('/api/init-data');
    const result = JSON.parse(response.text);

    expect(result.db_statistics.artists_qty).toEqual(dbStatistics.artists_qty);
    expect(result.db_statistics.release_qty).toEqual(dbStatistics.release_qty);
    expect(result.db_statistics.track_qty).toEqual(dbStatistics.track_qty);
    expect(result.db_statistics.youtube_qty).toEqual(dbStatistics.youtube_qty);
  });
});
