import React from 'react';

import classnames from 'classnames';

import './Spinner.css';

export interface Props {}

export default function Spinner(props: Props) {
  return (
    <div
      className={classnames('Spinner-Root', 'margin-right-8px')}
      style={{ fontSize: '1px' }}
    ></div>
  );
}
