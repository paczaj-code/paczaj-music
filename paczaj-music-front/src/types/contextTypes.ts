export interface LoadingTypes {
  application: boolean | undefined;
  artist: boolean | undefined;
  release: boolean | undefined;
}

export interface AppContextTypes {
  chosenArtistId: number | undefined;
  setChosenArtistId: React.Dispatch<React.SetStateAction<number | undefined>>;
  loadingType: LoadingTypes | undefined;
  setLoadingType: React.Dispatch<
    React.SetStateAction<LoadingTypes | undefined>
  >;
  chosenYoutubeId: string | undefined;
  setChosenYoutubeId: React.Dispatch<React.SetStateAction<string | undefined>>;
  chosenReleaseId: number | undefined;
  setChosenReleaseId: React.Dispatch<React.SetStateAction<number | undefined>>;
}
