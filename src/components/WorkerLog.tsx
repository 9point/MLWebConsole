import React from 'react';
import Text from './Text';

import './WorkerLog.css';

export interface Props {
  log: any;
}

export default function WorkerLog(props: Props) {
  const content = props.log.payload.descriptor.split('\n');

  return (
    <div className="WorkerLog-Root">
      {content.map((text: string, index: number) => (
        <Text
          displayStyle="block"
          fontStyle="mono"
          forceLineHeight={true}
          key={String(index)}
        >
          {text}
        </Text>
      ))}
    </div>
  );
}
