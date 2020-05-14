import LeftPaneSelector, {
  LeftPaneSelectorOption,
} from '../components/LeftPaneSelector';
import React from 'react';
import RunCanvas from '../runs/RunCanvas';
import RunPane from '../runs/RunPane';

import { PageWithToolbar } from './utils/Page';

import './MainPage.css';

export interface Props {}

export default function MainPage(props: Props) {
  const canvas = <RunCanvas />;

  function onSelectLeftPane(option: LeftPaneSelectorOption) {
    console.log('selected', option);
  }

  const leftPaneOptions = [
    { id: 'RUNS', name: 'Runs' },
    { id: 'WORKERS', name: 'Workers' },
  ];

  const leftPane = (
    <div className="MainPage-LeftPaneContainer">
      <LeftPaneSelector
        onSelect={onSelectLeftPane}
        options={leftPaneOptions}
        selectedID="RUNS"
      />
      <RunPane />
    </div>
  );

  return (
    <PageWithToolbar
      canvas={canvas}
      className="MainPage-Root"
      leftPane={leftPane}
      showLeftPane={true}
    />
  );
}
