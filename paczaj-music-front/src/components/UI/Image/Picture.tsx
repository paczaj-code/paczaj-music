import React, { useState } from 'react';
import PictureLoader from './PictureLoader';
import { classNameModifiers } from '../../../uitls/utils';
// import { AppContext } from '../../../context/AppContext';

interface PictureTypes {
  src: string;
  alt?: string;
  onClick: React.MouseEventHandler;
  picture_prefix?: string;
  picture_modifier?: string;
  title?: string;
}

const Picture: React.FC<PictureTypes> = ({
  src,
  alt,
  onClick,
  picture_prefix,
  picture_modifier,
  title,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  // const { setChosenYoutubeId } = useContext(AppContext);
  // const onClickHandler ()=>{
  //   if(picture_prefix==='youtube') {
  //     setChosenYoutubeId()
  //   }
  // }
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
        onClick={() => onClick}
      />
      <div className="picture__title">{title}</div>
    </picture>
  );
};

export default Picture;
