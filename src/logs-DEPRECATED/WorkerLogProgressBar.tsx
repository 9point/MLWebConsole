import React from 'react';
import Text from '../components/Text';

import classnames from 'classnames';

import './WorkerLogProgressBar.css';

export interface Props {
  key: string;
  name: string;
  progress: number;
}

export default function WorkerLogProgressBar(props: Props) {
  const { name, progress } = props;
  const progressPercent = Math.floor(progress * 1000) / 10;
  const barStatus = progress === 1 ? 'Done' : 'Working';

  return (
    <div className={classnames('margin-top-4px', 'WorkerLogProgressBar-Root')}>
      <Text displayStyle="Block" fontStyle="MonoNormal">
        {`${name} - ${progressPercent}%`}
      </Text>
      <div
        className={classnames({
          'margin-bottom-16px': true,
          'margin-top-4px': true,
          'WorkerLogProgressBar-Bar': true,
        })}
      >
        <div
          className={classnames({
            'WorkerLogProgressBar-BarInner': true,
            [`WorkerLogProgressBar-BarInner-BarStatus${barStatus}`]: true,
          })}
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}
