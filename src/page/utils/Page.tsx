import React from 'react';
import Toolbar from '../../components/Toolbar';

import classnames from 'classnames';

import './Page.css';

export interface Props {
  children?: React.ReactNode;
  className?: string;
}

export default function Page(props: Props) {
  return (
    <div className={classnames('Page', props.className)}>{props.children}</div>
  );
}

export function PageWithToolbar(props: Props) {
  return (
    <div className={classnames('Page', 'Page-WithToolbar', props.className)}>
      <Toolbar />
      {props.children}
    </div>
  );
}
