import React from 'react';
import Text from '../components/Text';

import { Model as Worker } from '../models/Worker';

import classnames from 'classnames';
import moment from 'moment';

import './WorkerListItem.css';

export interface Props {
  worker: Worker;
}

export default function WorkerListItem(props: Props) {
  const { worker } = props;
  const alias = worker.id.split('-')[0];

  return (
    <div className="WorkerListItem-Root">
      <div
        className={classnames({
          'WorkerListItem-StatusIndicator': true,
          'margin-right-8px': true,
          [`WorkerListItem-StatusIndicator-${worker.status}`]: true,
        })}
      />
      <Text className="WorkerListItem-Name" fontStyle="PrimaryNormal">
        {alias}
      </Text>
      <Text className="text-align-right" fontStyle="SecondaryAside">
        {moment(worker.createdAt).fromNow()}
      </Text>
    </div>
  );
}
