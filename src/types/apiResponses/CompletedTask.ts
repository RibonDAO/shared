export default interface CompletedTask {
  id: string | number;
  taskIdentifier: string;
  lastCompletedAt: string;
  timesCompleted: number;
  done: boolean;
  expiresAt: string;
}
