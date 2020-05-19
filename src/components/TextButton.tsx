import React from 'react';
import Text, { Props as Text$Props } from './Text';

import './TextButton.css';

export type Props = {
  [K in keyof Text$Props]: K extends 'displayStyle' ? never : Text$Props[K];
} & { onClick: () => void };

export default function TextButton(props: Props) {
  const { onClick, ...textProps } = props;
  return (
    <div className="TextButton-Root" onClick={onClick}>
      <Text {...textProps} displayStyle="Inline" />
    </div>
  );
}
