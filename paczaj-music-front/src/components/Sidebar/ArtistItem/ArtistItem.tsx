import React from 'react';
import { ArtistListInterface } from '../../../types/artistListTypes';

const ArtistItem: React.FC<Partial<ArtistListInterface>> = ({
  name,
  id,
  current,
  isLoading,
  onClick,
}) => {
  return (
    <li
      onClick={onClick}
      className={[
        'artist-list__item',
        current === id && !isLoading ? 'artist-list__item--active' : '',
        current === id && isLoading ? 'artist-list__item--loading' : '',
      ].join(' ')}
    >
      <span>{name}</span>
    </li>
  );
};

export default ArtistItem;
