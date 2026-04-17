// TODO (Team 2): Replace this placeholder with the full Snake & Ladder game implementation.
// See README.md in this folder for the spec, expected files, and API contract.

const ACCENT = '#10b981';

export default function SnakeLadderPage() {
  return (
    <div style={{ maxWidth: 640, margin: '60px auto', textAlign: 'center' }}>
      <div style={{ fontSize: 48, marginBottom: 16, color: ACCENT }}>⬢</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--heading)', marginBottom: 8 }}>
        Snake &amp; Ladder
      </h1>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', color: ACCENT, textTransform: 'uppercase', marginBottom: 24 }}>
        Min Dice Throws Problem — Team 2
      </p>
      <div style={{ background: 'var(--surface)', border: `1px solid ${ACCENT}30`, borderRadius: 12, padding: '32px 28px', color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>
        <p style={{ marginBottom: 16 }}>
          This game is under development by <strong style={{ color: 'var(--text)' }}>Team 2</strong>.
        </p>
        <p style={{ marginBottom: 16 }}>
          Algorithms to implement: <span style={{ color: ACCENT }}>BFS</span> &amp; <span style={{ color: ACCENT }}>Dijkstra</span>
        </p>
        <p style={{ fontSize: 12 }}>
          See <code style={{ background: 'var(--surface2)', padding: '2px 6px', borderRadius: 4 }}>client/src/games/snake-ladder/README.md</code> to get started.
        </p>
      </div>
    </div>
  );
}
