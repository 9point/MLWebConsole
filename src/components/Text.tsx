import React from 'react';

import classnames from 'classnames';

import './Text.css';

export interface Props {
  children?: React.ReactNode;
  displayStyle?: 'inline' | 'block';
  fontStyle?: 'mono' | 'primary';
  forceLineHeight?: boolean;
}

export default function Text(props: Props) {
  const displayStyle = props.displayStyle || 'inline';
  const fontStyle = props.fontStyle || 'sans-serif';
  const forceLineHeight = props.forceLineHeight || false;

  return (
    <span
      className={classnames({
        'Text-DisplayStyleBlock': displayStyle === 'block',
        'Text-DisplayStyleInline': displayStyle === 'inline',
        'Text-FontStyleMono': fontStyle === 'mono',
        'Text-FontStylePrimary': fontStyle === 'primary',
        'Text-ForceLineHeight': forceLineHeight,
        'Text-Root': true,
      })}
    >
      {props.children}
    </span>
  );
}
