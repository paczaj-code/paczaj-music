import { render, screen, fireEvent } from '@testing-library/react';
import { AppContext } from '../../../../context/AppContext';
import { testContextValues } from '../../../../__test__/test-utils';
import ReleasePicture from '../../Picture/ReleasePicture';

describe('Tests for ReleasePicture component', () => {
  it('should be proper classes when image loaded', async () => {
    render(
      <ReleasePicture
        src="image_src"
        alt="image_alt"
        picture_prefix="release"
      />
    );
    const image = screen.getByRole('img');
    fireEvent.load(image);
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('release__image--loaded');
  });

  it('should be not ok', async () => {
    render(
      <ReleasePicture
        src="image_src"
        alt="image_alt"
        picture_prefix="release"
      />
    );
    const image = screen.getByRole('img');
    fireEvent.error(image);
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('release__image--error');
  });

  it('should be setChosenReleaseId fired on click', async () => {
    render(
      <AppContext.Provider value={testContextValues}>
        <ReleasePicture
          src="image_src"
          alt="image_alt"
          picture_prefix="release"
        />
      </AppContext.Provider>
    );
    const image = screen.getByRole('img');
    fireEvent.click(image);
    expect(testContextValues.setChosenReleaseId).toBeCalledTimes(1);
  });
});
// TODO dodać testy dla klass
