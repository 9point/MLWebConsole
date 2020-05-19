export interface Subscription {
  stop: () => void;
}

export type CanvasMode = CanvasMode$DisplayRoutineRun;

export interface CanvasMode$DisplayRoutineRun {
  routineRunID: string;
  type: 'DISPLAY_ROUTINE_RUN';
}
