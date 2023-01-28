import React, { useContext } from 'react';
import { AppContext } from '../../../context/AppContext';
import YouTube, { YouTubeProps } from 'react-youtube';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { CSSTransition } from 'react-transition-group';
import Button from '../Button/Buttons';

const YoutubeModal = () => {
  const { chosenYoutubeId, setChosenYoutubeId } = useContext(AppContext);
  const opts: YouTubeProps['opts'] = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
      rel: 0,
      modestbranding: 1,
    },
  };

  return (
    <>
      <Backdrop
        trigger={Boolean(chosenYoutubeId)}
        backdrop_modifier="youtube"
        onClick={() => setChosenYoutubeId(undefined)}
      />
      <CSSTransition
        in={Boolean(chosenYoutubeId)}
        timeout={300}
        classNames="yotube-modal"
        unmountOnExit
        mountOnEnter
        appear
      >
        <div className="player" role="dialog">
          <Button
            button_prefix="modal-close"
            button_modifier="youtube"
            onClick={() => setChosenYoutubeId(undefined)}
          >
            <i className="icon-cancel-circle"></i>
          </Button>
          <YouTube
            onEnd={() => setChosenYoutubeId(undefined)}
            videoId={chosenYoutubeId}
            opts={opts}
            className="yt-player"
          />
        </div>
      </CSSTransition>
    </>
  );
};
export default YoutubeModal;
