import React, { useState } from 'react';
import { AppContextTypes, LoadingTypes } from '../types/contextTypes';

export const AppContext = React.createContext<AppContextTypes>({
  chosenArtistId: undefined,
  setChosenArtistId: () => {},
  loadingType: {
    application: false,
    artist: false,
    release: false,
  },
  setLoadingType: () => {},
  chosenYoutubeId: undefined,
  setChosenYoutubeId: () => {},
  chosenReleaseId: undefined,
  setChosenReleaseId: () => {},
});

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [loadingType, setLoadingType] = useState<LoadingTypes | undefined>({
    application: false,
    artist: false,
    release: false,
  });
  const [chosenArtistId, setChosenArtistId] = useState<number | undefined>(
    undefined
  );
  const [chosenYoutubeId, setChosenYoutubeId] = useState<string | undefined>(
    undefined
  );

  const [chosenReleaseId, setChosenReleaseId] = useState<number | undefined>(
    undefined
  );
  const initContextValue: AppContextTypes = {
    chosenArtistId,
    setChosenArtistId,
    loadingType,
    setLoadingType,
    chosenYoutubeId,
    setChosenYoutubeId,
    chosenReleaseId,
    setChosenReleaseId,
  };
  return (
    <AppContext.Provider value={initContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
