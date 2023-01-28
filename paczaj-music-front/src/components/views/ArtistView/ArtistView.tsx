import React, { useState, useContext, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import useAxios from '../../../hooks/useAxios';
import { CSSTransition } from 'react-transition-group';
import { AppContext } from '../../../context/AppContext';
import { ArtistDetailTypes } from '../../../types/artistDetailTypes';
import { ReleaseTypes } from '../../../types/releaseTypes';
import { YoutubeTypes } from '../../../types/youtubeTypes';
import Backdrop from '../../UI/Backdrop/Backdrop';
import SectionArtistDetails from './SectionArtistDetails/SectionArtistDetails';
import SectionYoutube from './SectionYoutube';
import SectionReleases from './SectionReleases';

interface ArtistViewTypes {
  artist_data?: ArtistDetailTypes;
  youtube_movies?: YoutubeTypes[];
  releases?: {
    studio_albums: ReleaseTypes[];
    extended_plays: ReleaseTypes[];
    compilations: ReleaseTypes[];
  };
}

const ArtistView: React.FC<ArtistViewTypes> = () => {
  const [artistDetails, setArtistDetailst] = useState<
    ArtistViewTypes | undefined
  >(undefined);

  const { chosenArtistId, loadingType, setLoadingType, chosenReleaseId } =
    useContext(AppContext);

  const { isLoading } = useAxios(
    chosenArtistId,
    {
      url: `artist/${chosenArtistId}`,
    },
    setArtistDetailst,
    750
  );

  useEffect(() => {
    setLoadingType((prevState: any) => ({ ...prevState, artist: isLoading }));
    !loadingType?.artist &&
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      }, 0);
  }, [isLoading, setLoadingType, loadingType?.artist]);

  const nodeRef = useRef(null);
  console.log(chosenReleaseId);

  return (
    <>
      <Helmet>
        <title>{artistDetails?.artist_data?.artist_name}</title>
      </Helmet>
      <Backdrop trigger={loadingType?.artist} withIconLoader />
      <CSSTransition
        in={!loadingType?.artist && Boolean(artistDetails)}
        timeout={400}
        classNames="artist__container artist__animation"
        unmountOnExit
        mountOnEnter
        nodeRef={nodeRef}
      >
        <>
          <SectionArtistDetails
            artist_name={artistDetails?.artist_data?.artist_name!}
            artist_description={
              artistDetails?.artist_data?.wikipedia_data.description
            }
            wikipedia_link={artistDetails?.artist_data?.wikipedia_suffix}
            country={artistDetails?.artist_data?.country}
            country_code={artistDetails?.artist_data?.country_code}
            tags={artistDetails?.artist_data?.tags}
            begin_date_year={artistDetails?.artist_data?.begin_date_year}
            end_date_year={artistDetails?.artist_data?.end_date_year}
          ></SectionArtistDetails>
          <SectionYoutube youtubeMovies={artistDetails?.youtube_movies} />
          {artistDetails?.releases!.studio_albums.length && (
            <SectionReleases
              releases={artistDetails?.releases.studio_albums}
              title="Albumy studyjne"
            />
          )}
          {artistDetails?.releases!.extended_plays.length && (
            <SectionReleases
              releases={artistDetails?.releases.extended_plays}
              title="EP's"
            />
          )}
          {artistDetails?.releases!.compilations.length && (
            <SectionReleases
              releases={artistDetails?.releases.compilations}
              title="Kompilacje"
            />
          )}
        </>
      </CSSTransition>
    </>
  );
};

export default ArtistView;
