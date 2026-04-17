export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

export function shuffleArray<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function generateDistractors(
  correct: number,
  count: number = 2
): number[] {
  const distractors: number[] = [];
  const usedValues = new Set<number>([correct]);
  const directions = [-1, 1];
  let attempt = 0;

  while (distractors.length < count && attempt < 100) {
    const dir = directions[attempt % 2];
    const pct = randomFloat(0.05, 0.20);
    const offset = Math.max(1, Math.round(correct * pct));
    const candidate = Math.max(1, correct + dir * offset);
    if (!usedValues.has(candidate)) {
      distractors.push(candidate);
      usedValues.add(candidate);
    }
    attempt++;
  }

  return distractors;
}

export function makeChoices(correct: number): [number, number, number] {
  const distractors = generateDistractors(correct, 2);
  const all = shuffleArray([correct, distractors[0], distractors[1]]);
  return [all[0], all[1], all[2]];
}
