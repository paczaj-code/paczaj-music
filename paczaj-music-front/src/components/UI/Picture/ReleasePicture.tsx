import React, { useState, useContext } from 'react';
import { PictureTypes } from '../../../types/pictureTypes';
import { classNameModifiers } from '../../../uitls/utils';
import PictureLoader from './PictureLoader';
import { AppContext } from '../../../context/AppContext';

const ReleasePicture: React.FC<PictureTypes> = ({
  src,
  alt,
  onClick,
  picture_prefix,
  picture_modifier,
  title,
  first_release_year,
  id,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const { setChosenReleaseId } = useContext(AppContext);
  return (
    <picture
      className={classNameModifiers(
        picture_prefix,
        picture_modifier,
        'picture'
      )}
    >
      {!loaded && (
        <PictureLoader picture__loader_prefix="release" isError={loadError} />
      )}
      <source srcSet={src} media="(min-width: 700px)" />
      <img
        onLoad={() => setLoaded(true)}
        onError={() => setLoadError(true)}
        className={[
          `${picture_prefix}__image`,
          loaded ? `${picture_prefix}__image--loaded` : '',
          loadError ? `${picture_prefix}__image--error` : '',
        ].join(' ')}
        src={src}
        alt={alt}
        // @ts-ignore
        onClick={() => setChosenReleaseId(id)}
      />
      <div className="picture__title">
        <p>{title}</p>
        <p>{first_release_year}</p>
      </div>
    </picture>
  );
};

export default ReleasePicture;
