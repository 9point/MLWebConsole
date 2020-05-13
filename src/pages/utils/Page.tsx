import React from 'react';
import Toolbar from '../../components/Toolbar';

import classnames from 'classnames';

import './Page.css';

export interface Props {
  canvas: React.ReactElement;
  className?: string;
  leftPane?: React.ReactElement;
  showLeftPane?: boolean;
}

export function PageWithToolbar(props: Props) {
  return (
    <div className={classnames('Page', 'Page-WithToolbar', props.className)}>
      <Toolbar />
      <div className="Page-Content">
        {props.leftPane && props.showLeftPane && (
          <div className="Page-LeftPane">{props.leftPane}</div>
        )}
        <div className="Page-Canvas">{props.canvas}</div>
      </div>
    </div>
  );
}
