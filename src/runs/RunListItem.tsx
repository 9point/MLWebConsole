import React from 'react';
import Spinner from '../components/Spinner';
import Text from '../components/Text';

import classnames from 'classnames';
import moment from 'moment';

import { Model as RoutineRun } from '../models/RoutineRun';
import { parseFull as parseFullRoutineID } from '../routine-id';

import './RunListItem.css';

export interface Props {
  onClick: () => void;
  run: RoutineRun;
}

export default function RunListItem(props: Props) {
  const { run } = props;
  const routineID = parseFullRoutineID(run.routineID);
  if (routineID.type !== 'tname' && routineID.type !== 'wfname') {
    throw new Error('Expecting named routine id');
  }

  const isRunning = ['INITIALIZING', 'RUNNING'].includes(run.status);

  return (
    <div className="RunListItem-Root" onClick={props.onClick}>
      {!isRunning && (
        <div
          className={classnames({
            'RunListItem-StatusIndicator': true,
            'margin-right-8px': true,
            [`RunListItem-StatusIndicator-${run.status}`]: true,
          })}
        />
      )}
      {isRunning && <Spinner />}
      <Text className="RunListItem-Name" fontStyle="PrimaryNormal">
        {routineID.routineName}
      </Text>
      <Text className="text-align-right" fontStyle="SecondaryAside">
        {moment(run.createdAt).fromNow()}
      </Text>
    </div>
  );
}
