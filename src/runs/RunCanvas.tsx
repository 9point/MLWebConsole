import React from 'react';
import RunLog from '../logs/RunLog';
import Text from '../components/Text';

import './RunCanvas.css';

export interface Props {}

export default function RunCanvas(props: Props) {
  return (
    <div className="RunCanvas-Root">
      <div className="RunCanvas-Header">
        <Text displayStyle="Block" fontStyle="PrimaryNormal">
          {'simple_example.build'}
        </Text>
      </div>
      <div className="RunCanvas-Content">
        <RunLog
          date={new Date()}
          domain="simple_example.build"
          message="Hello World"
        />
        <RunLog
          date={new Date()}
          domain="simple_example.build"
          message="This is another message"
        />
        <RunLog
          date={new Date()}
          domain="simple_example.build"
          message="This is a third message"
        />
      </div>
    </div>
  );
}
