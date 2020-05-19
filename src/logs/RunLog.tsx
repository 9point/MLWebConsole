import React from 'react';
import Text from '../components/Text';
import TextButton from '../components/TextButton';

import classnames from 'classnames';

import './RunLog.css';

export interface Classes {
  root: string;
}

export interface Props {
  classes?: Classes;
  date: Date;
  domain: string;
  message: string;
}

export default function RunLog(props: Props) {
  function onClickDomain() {
    console.log('domain clicked');
  }

  return (
    <div className={classnames('RunLog-Root', props.classes?.root)}>
      <Text className={classnames('RunLog-DateText')} fontStyle="MonoNormal">
        {`[${props.date.toISOString()}]`}
      </Text>
      <TextButton
        className={classnames('RunLog-DomainText', 'padding-right-8px')}
        fontStyle="MonoNormal"
        onClick={onClickDomain}
      >
        {`[${props.domain}]`}
      </TextButton>
      <Text fontStyle="MonoNormal">{props.message}</Text>
    </div>
  );
}
