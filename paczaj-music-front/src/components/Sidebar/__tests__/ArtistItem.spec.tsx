/* eslint-disable testing-library/no-node-access */
import { render, screen, fireEvent } from '@testing-library/react';
import ArtistItem from '../ArtistItem/ArtistItem';
import { ArtistListInterface } from '../../../types/artistListTypes';

const artists: Partial<ArtistListInterface>[] = [
  { name: 'Some artist 1', id: 1 },
  { name: 'Some artist 2', id: 2 },
];

describe('Tests ArtistItem component', () => {
  it('should be proper artist name', () => {
    render(<ArtistItem name={`${artists[0].name}`} id={+`${artists[0].id}`} />);
    const artistWrapper = document.querySelectorAll('.artist-list__item');
    expect(artistWrapper[0].innerHTML).toEqual(
      `<span>${artists[0].name}</span>`
    );
  });
  it('should be proper class', () => {
    render(<ArtistItem name={`${artists[0].name}`} id={+`${artists[0].id}`} />);
    const artistWrapper = document.querySelectorAll('.artist-list__item');
    expect(artistWrapper[0]).toHaveClass('artist-list__item');
  });
  it('should be class "artist-list__item--active" when "current" props given and equal to id and is not isLoaded', () => {
    render(
      <ArtistItem
        name={`${artists[1].name}`}
        id={+`${artists[1].id}`}
        current={2}
        isLoading={false}
      />
    );
    const artistWrapper = document.querySelectorAll(
      '.artist-list__item--active'
    );
    expect(artistWrapper[0]).toBeInTheDocument();
  });
  // it('should be class "artist-list__item--loading" when  is isLoading and id is equal', () => {
  //   render(
  //     <ArtistItem
  //       name={`${artists[1].name}`}
  //       id={+`${artists[1].id}`}
  //       current={2}
  //       isLoading={true}
  //     />
  //   );
  //   const artistItems = document.querySelectorAll('.artist-list__item');
  //   expect(artistItems[0]).toHaveClass('artist-list__item--loading');
  // });
  it('should be fired once function "onClickHandler', () => {
    const clickFunction = jest.fn();
    render(
      <ArtistItem
        name={`${artists[0].name}`}
        id={+`${artists[0].id}`}
        onClick={clickFunction}
      />
    );
    const artistElement = screen.getByText(`${artists[0].name}`);
    fireEvent.click(artistElement);
    expect(clickFunction).toHaveBeenCalledTimes(1);
  });
});
