import React from 'react';
import { classNameModifiers } from '../../../uitls/utils';

interface PictureLoaderTypes {
  picture__loader_prefix?: string;
  picture__loader_modifier?: string;
  isError?: boolean;
}

const PictureLoader: React.FC<PictureLoaderTypes> = ({
  picture__loader_prefix,
  picture__loader_modifier,
  isError,
}) => {
  picture__loader_modifier = isError ? 'error' : '';
  return (
    <div
      role="progressbar"
      className={classNameModifiers(
        picture__loader_prefix,
        picture__loader_modifier,
        'picture__loader'
      )}
    >
      {!isError ? (
        <i className="icon-spinner9"></i>
      ) : (
        <div className="image__error" role="alert">
          <i className="icon-warning-outline"></i>
          <p className="image__error_message">Wystąpił błąd</p>
        </div>
      )}
    </div>
  );
};

export default PictureLoader;
