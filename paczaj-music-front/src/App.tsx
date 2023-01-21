import { useState, useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import useAxios from './hooks/useAxios';
import { InitialDataTypes } from './types/initialDataTypes';
import Sidebar from './components/Sidebar/Sidebar';
import Loader from './components/UI/Loader/Loader';
import Error from './components/UI/Error/Error';
import Button from './components/UI/Button/Buttons';
import Homepage from './components/views/Homepage/Homepage';
import ArtistView from './components/views/ArtistView/ArtistView';

const App = () => {
  const [initData, setInitData] = useState<InitialDataTypes | undefined>(
    undefined
  );

  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showHompage, setShowHompage] = useState<boolean>(true);

  const { loadingType, setLoadingType, chosenArtistId, setChosenArtistId } =
    useContext(AppContext);

  const { isLoading, error } = useAxios(
    null,
    { url: 'init-data' },
    setInitData,
    1000
  );

  useEffect(() => {
    setLoadingType((prevState: any) => ({
      ...prevState,
      application: isLoading,
    }));
  }, [isLoading, setLoadingType]);

  useEffect(() => {
    setShowMenu(false);
    Boolean(chosenArtistId) && setShowHompage(false);
  }, [chosenArtistId]);

  const showHompageHandler = () => {
    setShowHompage(true);
    setChosenArtistId(undefined);
  };

  return (
    <div
      className={['App', initData && 'App__data-loaded'].join(' ')}
      role="presentation"
    >
      <Loader trigger={loadingType?.application} />
      {error ? (
        <Error error={error} />
      ) : (
        <>
          {initData && (
            <Button
              button_prefix={showMenu ? 'close-menu' : 'show-menu'}
              onClick={() => setShowMenu((prev) => !prev)}
            />
          )}

          <div
            className={[
              'artist-list',
              showMenu ? 'artist-list--show' : '',
            ].join(' ')}
          >
            <Sidebar artist_list={initData?.artists_list} />
          </div>
          <main className="main__content">
            {chosenArtistId && (
              <Button button_prefix="homepage" onClick={showHompageHandler} />
            )}
            {showHompage && Boolean(initData) && (
              <Homepage
                artists_qty={initData?.db_statistics?.artists_qty!}
                release_qty={initData?.db_statistics?.release_qty!}
                track_qty={initData?.db_statistics.track_qty!}
                youtube_qty={initData?.db_statistics.youtube_qty!}
              />
            )}
            {!showHompage && chosenArtistId && <ArtistView />}
          </main>
        </>
      )}
    </div>
  );
};

export default App;
