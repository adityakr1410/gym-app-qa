// src/types/Workout.ts
export type WorkoutStatus =
  | 'Scheduled'
  | 'Waiting for feedback'
  | 'Finished'
  | 'Canceled';

export interface Workout {
  id: string;
  title: string;
  description: string;
  dateTime: string;
  status: WorkoutStatus;
  buttonLabel: string;
}
