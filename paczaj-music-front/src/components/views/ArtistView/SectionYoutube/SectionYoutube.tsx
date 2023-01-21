import React, { useContext } from 'react';
import { YoutubeTypes } from '../../../../types/youtubeTypes';
import Picture from '../../../UI/Image/Picture';
import Section from '../../../UI/Section/Section';
import { AppContext } from '../../../../context/AppContext';

interface YoutubeMoviesTypes {
  youtubeMovies: YoutubeTypes[] | undefined;
}

const SectionYoutube: React.FC<YoutubeMoviesTypes> = ({ youtubeMovies }) => {
  //   console.log(moviesData);
  const { setChosenYoutubeId } = useContext(AppContext);
  return (
    <Section section_title="Youtube" section_type="youtube">
      {youtubeMovies?.map((youtubeMovie: YoutubeTypes) => (
        <Picture
          picture_prefix="youtube"
          src={`https://i.ytimg.com/vi/${youtubeMovie.youtube_id}/mqdefault.jpg`}
          title={youtubeMovie.title}
          onClick={() => setChosenYoutubeId(youtubeMovie.youtube_id)}
        />
        // <p>{youtubeMovie.title}</p>
      ))}
    </Section>
  );
};

export default SectionYoutube;
