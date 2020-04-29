import React from 'react';

import classnames from 'classnames';

import './Toolbar.css';

export interface Props {}

export default function Toolbar(props: Props) {
  return <div className={classnames('Toolbar-Root', 'Theme-Light')}></div>;
}
