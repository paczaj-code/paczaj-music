import React from 'react';
import { ArtistListInterface } from '../../../types/artistListTypes';

const ArtistItem: React.FC<Partial<ArtistListInterface>> = ({
  name,
  id,
  current,
  isLoading,
  onClick,
}) => {
  // const classModifier =
  let classModifier = '';

  if (current === id && !isLoading) {
    classModifier = '--active';
  }
  if (current === id && isLoading) {
    classModifier = '--loading';
  }

  return (
    <li onClick={onClick} className={`artist-list__item${classModifier}`}>
      <span>{name}</span>
    </li>
  );
};

export default ArtistItem;
