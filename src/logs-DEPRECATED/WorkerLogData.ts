export type MessageType = 'H1' | 'H2' | 'H3' | 'P';

export type WorkerLogData = WorkerLogData$Message | WorkerLogData$ProgressBar;

export interface WorkerLogData$Message {
  content: string;
  messageType: MessageType;
  reactKey: string;
  type: 'Message';
}

export interface WorkerLogData$ProgressBar {
  key: string;
  name: string;
  progress: number;
  reactKey: string;
  type: 'ProgressBar';
}
