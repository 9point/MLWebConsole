import React from 'react';
import RunCanvas from '../runs/RunCanvas';
import RunPane from '../runs/RunPane';

import { PageWithToolbar } from './utils/Page';

import './MainPage.css';

export interface Props {}

export default function MainPage(props: Props) {
  const canvas = <RunCanvas />;
  const leftPane = <RunPane />;

  return (
    <PageWithToolbar
      canvas={canvas}
      className="MainPage-Root"
      leftPane={leftPane}
      showLeftPane={true}
    />
  );
}
