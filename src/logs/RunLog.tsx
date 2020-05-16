import React from 'react';
import Text from '../components/Text';

import classnames from 'classnames';

import './RunLog.css';

export interface Classes {
  root: string;
}

export interface Props {
  classes?: Classes;
  // domain: string;
  // message: string;
}

export default function RunLog(props: Props) {
  return (
    <div className={classnames('RunLog-Root', props.classes?.root)}>
      <Text
        className={classnames('RunLog-DateText', 'padding-right-8px')}
        fontStyle="MonoNormal"
      >
        {'[2020-05-16T07:06:53.994Z]'}
      </Text>
      <Text
        className={classnames('RunLog-DomainText', 'padding-right-8px')}
        fontStyle="MonoNormal"
      >
        {'[simple_example.train]'}
      </Text>
      <Text fontStyle="MonoNormal">
        {
          'Hello World, this is a log being shared from the training task that is running.'
        }
      </Text>
    </div>
  );
}
