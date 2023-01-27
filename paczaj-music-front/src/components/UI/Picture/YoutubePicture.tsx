import React, { useState, useContext } from 'react';
import { classNameModifiers } from '../../../uitls/utils';
import { PictureTypes } from '../../../types/pictureTypes';
import { AppContext } from '../../../context/AppContext';

const YoutubePicture: React.FC<PictureTypes> = ({
  src,
  alt,
  picture_prefix,
  picture_modifier,
  title,
  id,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const { setChosenYoutubeId, chosenYoutubeId } = useContext(AppContext);

  console.log(chosenYoutubeId);
  return (
    <picture
      className={[
        classNameModifiers(picture_prefix, picture_modifier, 'picture'),
        !loaded ? 'picture__loading' : '',
      ].join(' ')}
    >
      <source srcSet={src} media="(min-width: 700px)" />
      <img
        onLoad={() => setLoaded(true)}
        onError={() => setLoadError(true)}
        className={[
          loaded ? `${picture_prefix}__picture--loaded` : '',
          loadError ? `${picture_prefix}__picture--error` : '',
        ].join(' ')}
        src={src}
        alt={alt}
        // @ts-ignore
        onClick={() => setChosenYoutubeId(id?.toString())}
      />
      <div className="picture__title">{title}</div>
    </picture>
  );
};

export default YoutubePicture;
