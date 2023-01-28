import React from 'react';
import { YoutubeTypes } from '../../../types/youtubeTypes';
import YoutubePicture from '../../UI/Picture/YoutubePicture';
import Section from '../../UI/Section/Section';

interface YoutubeMoviesTypes {
  youtubeMovies: YoutubeTypes[] | undefined;
}

const SectionYoutube: React.FC<YoutubeMoviesTypes> = ({ youtubeMovies }) => {
  return (
    <Section section_title="Youtube" section_type="youtube">
      {youtubeMovies?.map((youtubeMovie: YoutubeTypes) => (
        <YoutubePicture
          key={youtubeMovie.youtube_id}
          picture_prefix="youtube"
          src={`https://i.ytimg.com/vi/${youtubeMovie.youtube_id}/mqdefault.jpg`}
          title={youtubeMovie.title}
          id={youtubeMovie.youtube_id}
        />
      ))}
    </Section>
  );
};

export default SectionYoutube;
