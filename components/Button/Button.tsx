import React, { useRef, useImperativeHandle } from 'react';
import classnames from 'classnames';
import styled from './Button.module.css';

type ButtonRef = {};

type ButtonFormProps = {
  id? : string;
  action? : string;
  enctype? : 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain';
  method? : 'post' | 'get'
};

type ButtonProps = {
  label? : string;
  className? : string;
  onClick? : () => void;
  inlineStyles? : object;
  autofocus? : boolean;
  disabled? : boolean;
  name? : string;
  type? : 'submit' | 'reset' | 'button';
  value? : string;
  form? : ButtonFormProps;
};

const defaultProps : ButtonProps = {
  label : 'Button',
  className : '',
  onClick : () => null,
  inlineStyles : {},
  autofocus : false,
  disabled : false,
  name : 'button',
  type : 'button',
  value : 'button'
};

const Button = React.forwardRef<ButtonRef, ButtonProps>((props = defaultProps, ref) => {
  const {
    label,
    onClick,
    className,
    inlineStyles,
    autofocus,
    disabled,
    name,
    type,
    value,
    form
  } = props;

  const wrapperRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(
    ref,
    () : ButtonRef => ({})
  );

  return (
    <button
      ref={wrapperRef}
      className={classnames(styled.wrapper, className)}
      onClick={onClick}
      style={inlineStyles}
      autoFocus={autofocus}
      disabled={disabled}
      name={name}
      type={type}
      value={value}
      form={form.id}
      formAction={form.action}
      formEncType={form.enctype}
      formMethod={form.method}
    >
      {label}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
