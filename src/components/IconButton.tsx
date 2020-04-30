import Icon, { IconName } from './Icon';
import React from 'react';

import classnames from 'classnames';

import './IconButton.css';

export interface Props {
  dim?: boolean;
  iconName: IconName;
  onClick: () => void;
}

export default function IconButton(props: Props) {
  const dim = props.dim || false;
  return (
    <div
      className={classnames({
        'IconButton-Dim': dim,
        'IconButton-Root': true,
      })}
      onClick={props.onClick}
      role="button"
    >
      <Icon iconName={props.iconName} />
    </div>
  );
}
