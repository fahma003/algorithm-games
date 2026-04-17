export interface TimedResult<T> {
  result: T;
  executionTimeMs: number;
}

export function timeExecution<T>(fn: () => T): TimedResult<T> {
  const start = performance.now();
  const result = fn();
  const executionTimeMs = performance.now() - start;
  return { result, executionTimeMs };
}

export async function timeExecutionAsync<T>(
  fn: () => Promise<T>
): Promise<TimedResult<T>> {
  const start = performance.now();
  const result = await fn();
  const executionTimeMs = performance.now() - start;
  return { result, executionTimeMs };
}
