import React from 'react';
import { classNameModifiers } from '../../../uitls/utils';

interface PictureLoaderTypes {
  picture__loader_prefix?: string;
  picture__loader_modifier?: string;
}

const PictureLoader: React.FC<PictureLoaderTypes> = ({
  picture__loader_prefix,
  picture__loader_modifier,
}) => {
  return (
    <div
      className={classNameModifiers(
        picture__loader_prefix,
        picture__loader_modifier,
        'picture__loader'
      )}
    >
      <i className="spinner"></i>
      wwefwfe
    </div>
  );
};

export default PictureLoader;
