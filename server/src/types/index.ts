export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export interface AlgorithmTimingDto {
  algorithmName: string;
  executionTimeMs: number;
  result: string;
}

export type GameResultOutcome = 'win' | 'lose' | 'draw';
