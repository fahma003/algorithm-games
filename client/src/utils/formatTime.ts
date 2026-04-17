export function formatMs(ms: number): string {
  if (ms < 0.01) return '< 0.01 ms';
  if (ms < 1) return `${ms.toFixed(3)} ms`;
  if (ms < 1000) return `${ms.toFixed(2)} ms`;
  return `${(ms / 1000).toFixed(3)} s`;
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat().format(n);
}
