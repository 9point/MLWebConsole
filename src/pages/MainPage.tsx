import LeftPaneSelector, {
  LeftPaneSelectorOption,
} from '../components/LeftPaneSelector';
import React, { useState } from 'react';
import RunCanvas from '../runs/RunCanvas';
import RunPane from '../runs/RunPane';
import WorkerCanvas from '../workers/WorkerCanvas';
import WorkerPane from '../workers/WorkerPane';

import { PageWithToolbar } from './utils/Page';
import { useHistory } from 'react-router-dom';

import './MainPage.css';

const LEFT_PANE_OPTIONS: Array<LeftPaneSelectorOption<LeftPaneMode>> = [
  { mode: 'RUNS', name: 'Runs' },
  { mode: 'WORKERS', name: 'Workers' },
];

const LeftPaneModeToPath = {
  RUNS: '/runs',
  WORKERS: '/workers',
};

export type LeftPaneMode = keyof typeof LeftPaneModeToPath;

export interface LeftPaneState {
  mode: LeftPaneMode;
}

export interface Props {
  leftPaneState: LeftPaneState;
}

export default function MainPage(props: Props) {
  const [leftPaneMode, setLeftPaneMode] = useState(props.leftPaneState.mode);
  const history = useHistory();

  const canvas = <CanvasContent mode={props.leftPaneState.mode} />;

  function onSelectLeftPane(option: LeftPaneSelectorOption<LeftPaneMode>) {
    const mode = option.mode;
    history.push(LeftPaneModeToPath[mode]);
    setLeftPaneMode(mode);
  }

  const leftPane = (
    <div className="MainPage-LeftPaneContainer">
      <LeftPaneSelector
        onSelect={onSelectLeftPane}
        options={LEFT_PANE_OPTIONS}
        selectedID={leftPaneMode}
      />
      <LeftPaneContent mode={props.leftPaneState.mode} />
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

function CanvasContent(props: { mode: LeftPaneMode }) {
  switch (props.mode) {
    case 'RUNS':
      return <RunCanvas />;

    case 'WORKERS':
      return <WorkerCanvas />;
  }
}

function LeftPaneContent(props: { mode: LeftPaneMode }) {
  switch (props.mode) {
    case 'RUNS':
      return <RunPane />;

    case 'WORKERS':
      return <WorkerPane />;
  }
}
