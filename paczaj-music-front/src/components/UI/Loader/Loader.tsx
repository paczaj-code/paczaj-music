import React, { useRef } from 'react';
import Equalizer from './Equalizer';
import { CSSTransition } from 'react-transition-group';

interface LoaderTypes {
  trigger?: boolean | undefined;
}

const Loader: React.FC<LoaderTypes> = ({ trigger }) => {
  const nodeRef = useRef(null);
  return (
    <>
      <CSSTransition
        nodeRef={nodeRef}
        in={trigger}
        timeout={600}
        classNames="loader__animation"
        unmountOnExit
        mountOnEnter
        appear
      >
        <div className="loader__wrapper">
          <Equalizer />
          <h1 className="loader__title">
            <span className="love">I❤️ </span> <br />
            ROCK<span className="rocknroll"> & </span>ROLL
          </h1>
        </div>
      </CSSTransition>
    </>
  );
};

export default Loader;
