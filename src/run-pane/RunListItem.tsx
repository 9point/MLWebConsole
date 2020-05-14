import React from 'react';

import { Model as RoutineRun } from '../models/RoutineRun';

import './RunListItem.css';

export interface Props {
  run: RoutineRun;
}

export default function RunListItem(props: Props) {
  return <div className="RunListItem-Root">{'Blah'}</div>;
}
