import React from 'react';

import classnames from 'classnames';

import './Text.css';

export type DisplayStyle = 'Inline' | 'Block';

export type FontStyle =
  | 'MonoLarge'
  | 'MonoNormal'
  | 'MonoSemibold'
  | 'MonoXLarge'
  | 'MonoXXLarge'
  | 'PrimaryNormal'
  | 'PrimaryLarge'
  | 'SecondaryNormal';

export interface Props {
  children?: React.ReactNode;
  className?: string;
  displayStyle?: DisplayStyle;
  fontStyle?: FontStyle;
  forceLineHeight?: boolean;
}

export default function Text(props: Props) {
  const displayStyle = props.displayStyle || 'Inline';
  const fontStyle = props.fontStyle || 'PrimaryNormal';
  const forceLineHeight = props.forceLineHeight || false;

  return (
    <span
      className={classnames(props.className, {
        'Text-ForceLineHeight': forceLineHeight,
        'Text-Root': true,
        [`Text-DisplayStyle${displayStyle}`]: true,
        [`Text-FontStyle${fontStyle}`]: true,
      })}
    >
      {props.children}
    </span>
  );
}
