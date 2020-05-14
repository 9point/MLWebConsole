import React from 'react';
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
    </div>
  );
}
