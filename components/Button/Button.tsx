import React from 'react';
import classnames from 'classnames';
import styled from './Button.module.css';

type ButtonProps = {
  label? : string;
  className? : string;
  onClick? : () => void;
  inlineStyles? : object;
}

const defaultProps : ButtonProps = {
  label : 'Button',
  className : '',
  onClick : () => null,
  inlineStyles : {}
};

const Button = (props : ButtonProps = defaultProps) => {
  const {
    label,
    onClick,
    className,
    inlineStyles
  } = props;
  
  return (
    <button
      className={classnames(styled.wrapper, className)}
      onClick={onClick}
      style={inlineStyles}
    >
      {label}
    </button>
  );
};

export default Button;
