import React from 'react';

import classnames from 'classnames';

import './Icon.css';

export type IconName = 'DarkMode' | 'SidebarLeft';

export interface Classes {
  root?: string;
}

export interface Props {
  classes?: Classes;
  iconName: IconName;
}

export default function Icon(props: Props) {
  return (
    <i
      className={classnames(
        'Icon-Root',
        `Icon-IconName${props.iconName}`,
        props.classes?.root,
      )}
    />
  );
}
