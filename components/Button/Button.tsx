import React, { useRef, useImperativeHandle, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import styled from './Button.module.css';

type ButtonRef = {};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className : string,
  children : React.ReactNode
};

const defaultProps : Partial<ButtonProps> = {
  className : ''
};

const Button = React.forwardRef<ButtonRef, Partial<ButtonProps>>((props = defaultProps, ref) => {
  const wrapperRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(
    ref,
    () : ButtonRef => ({})
  );

  return (
    <button
      ref={wrapperRef}
      className={classnames(styled.wrapper, props.className)}
      {...props}
    >
      {props.children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
