import React, { useState, useContext, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { CSSTransition } from 'react-transition-group';
import { AppContext } from '../../../context/AppContext';
import { ArtistDetailTypes } from '../../../types/artistDetailTypes';
import useAxios from '../../../hooks/useAxios';
// import Section from '../../UI/Section/Section';
import Backdrop from '../../UI/Backdrop/Backdrop';
import SectionArtistDetails from './Sections/SectionArtistDetails/SectionArtistDetails';

interface ArtistViewTypes {
  artist_data?: ArtistDetailTypes;
  // youtube_movies: YoutubeMovieTypes[];
  // releases: {
  //   studio_albums: ReleaseTypes[];
  //   extended_plays: ReleaseTypes[];
  //   compilations: ReleaseTypes[];
  // };
}

const ArtistView: React.FC<ArtistViewTypes> = () => {
  const [artistDetails, setArtistDetailst] = useState<
    ArtistViewTypes | undefined
  >(undefined);

  const { chosenArtistId, loadingType, setLoadingType } =
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
      </CSSTransition>
    </>
  );
};

export default ArtistView;
