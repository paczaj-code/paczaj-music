import React from 'react';
import { classNameModifiers } from '../../../uitls/utils';

interface ButtonTypes {
  type?: 'button' | 'submit' | 'reset';
  button_prefix?: string;
  button_modifier?: string;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonTypes> = ({
  type = 'button',
  button_prefix,
  button_modifier,
  children,
  onClick,
}) => {
  return (
    <button
      aria-label="button"
      type={type}
      className={classNameModifiers(button_prefix, button_modifier, 'button')}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
