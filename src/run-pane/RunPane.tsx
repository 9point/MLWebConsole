import React from 'react';
import Text from '../components/Text';

import './RunPane.css';

export interface Props {}

export default function RunPane(props: Props) {
  return (
    <div className="RunPane-Root">
      <div className="RunPane-Header">
        <Text className="text-align-center" fontStyle="Large">
          {'Runs'}
        </Text>
      </div>
    </div>
  );
}
