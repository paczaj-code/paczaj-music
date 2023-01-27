import { render, screen, fireEvent } from '@testing-library/react';
import YoutubePicture from '../../Picture/YoutubePicture';
import { AppContext } from '../../../../context/AppContext';
import { testContextValues } from '../../../../__test__/test-utils';

describe('Tests for YoutubePicture component', () => {
  it('should be proper classes when image loaded', async () => {
    render(
      <YoutubePicture
        src="image_src"
        alt="image_alt"
        picture_prefix="youtube"
      />
    );
    const image = screen.getByRole('img');
    fireEvent.load(image);
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('youtube__picture--loaded');
  });

  it('should be not ok', async () => {
    render(
      <YoutubePicture
        src="image_src"
        alt="image_alt"
        picture_prefix="youtube"
      />
    );
    const image = screen.getByRole('img');
    fireEvent.error(image);
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('youtube__picture--error');
  });

  it('should be setChosenYoutubeId fired on click', async () => {
    render(
      <AppContext.Provider value={testContextValues}>
        <YoutubePicture
          src="image_src"
          alt="image_alt"
          picture_prefix="youtube"
        />
      </AppContext.Provider>
    );
    const image = screen.getByRole('img');
    fireEvent.click(image);
    // expect(image).toBeInTheDocument();
    expect(testContextValues.setChosenYoutubeId).toBeCalledTimes(1);
  });
});
// TODO dodać testy dla klass
