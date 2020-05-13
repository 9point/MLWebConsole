import React from 'react';

import { PageWithToolbar } from './utils/Page';

import './MainPage.css';

export interface Props {}

export default function MainPage(props: Props) {
  const canvas = <>Hello Word</>;
  const leftPane = <div />;

  return (
    <PageWithToolbar
      canvas={canvas}
      className="MainPage-Root"
      leftPane={leftPane}
      showLeftPane={true}
    />
  );
}
