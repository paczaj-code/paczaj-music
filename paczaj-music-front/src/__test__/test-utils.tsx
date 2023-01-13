import { AppContextTypes } from '../types/contextTypes';

export const testContextValues: AppContextTypes = {
  chosenArtistId: 2,
  setChosenArtistId: jest.fn(),
  loadingType: { application: false, artist: true, release: false },
  setLoadingType: jest.fn(),
  chosenYoutubeId: undefined,
  setChosenYoutubeId: jest.fn(),
  chosenReleaseId: undefined,
  setChosenReleaseId: jest.fn(),
};
