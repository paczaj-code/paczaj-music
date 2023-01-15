import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { classNameModifiers } from '../../../uitls/utils';

interface BackdropTypes {
  onClick: React.MouseEventHandler;
  trigger?: boolean | undefined;
  backdrop_prefix?: string;
  backdrop_modifier?: string;
  withIconLoader: boolean;
  nodeRef: any;
}
const Backdrop: React.FC<Partial<BackdropTypes>> = ({
  onClick,
  trigger,
  backdrop_prefix,
  backdrop_modifier,
  withIconLoader,
}) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={trigger}
      timeout={300}
      classNames="backdrop__animation"
      unmountOnExit
      mountOnEnter
      appear
    >
      <div
        role="status"
        ref={nodeRef}
        onClick={onClick}
        className={classNameModifiers(
          backdrop_prefix,
          backdrop_modifier,
          'backdrop'
        )}
      >
        {withIconLoader && (
          <i
            className="backdrop__icon icon-spinner2 icon-rotate"
            role="spinbutton"
          ></i>
        )}
      </div>
    </CSSTransition>
  );
};

export default Backdrop;
