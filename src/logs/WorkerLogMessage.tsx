import React from 'react';
import Text, { FontStyle } from '../components/Text';

import classnames from 'classnames';

import './WorkerLogMessage.css';

export type MessageType = 'H1' | 'H2' | 'H3' | 'P';

export interface Props {
  content: string;
  messageType: MessageType;
}

export default function WorkerLogMessage(props: Props) {
  const { content, messageType } = props;
  const fontStyle = getFontStyle(props.messageType);

  return (
    <div
      className={classnames({
        'margin-vert-4px': messageType === 'H3',
        'margin-vert-8px': messageType === 'H2',
        'margin-top-16px': messageType === 'H1',
        'margin-bottom-8px': messageType === 'H1',
        'padding-bottom-8px': messageType === 'H1',
        'WorkerLogMessage-BottomDivider': messageType === 'H1',
        'WorkerLogMessage-Root': true,
      })}
    >
      <Text displayStyle="Block" fontStyle={fontStyle} forceLineHeight={true}>
        {content}
      </Text>
    </div>
  );
}

function getFontStyle(messageType: MessageType): FontStyle {
  switch (messageType) {
    case 'H1':
      return 'MonoXXLarge';

    case 'H2':
      return 'MonoXLarge';

    case 'H3':
      return 'MonoLarge';

    case 'P':
      return 'MonoNormal';
  }
}
