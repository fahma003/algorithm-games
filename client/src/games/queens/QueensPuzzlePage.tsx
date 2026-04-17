// TODO (Team 5): Replace this placeholder with the full 16-Queens game implementation.
// See README.md in this folder for the spec, expected files, and API contract.

const ACCENT = '#fb7185';

export default function QueensPuzzlePage() {
  return (
    <div style={{ maxWidth: 640, margin: '60px auto', textAlign: 'center' }}>
      <div style={{ fontSize: 48, marginBottom: 16, color: ACCENT }}>♛</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--heading)', marginBottom: 8 }}>
        Sixteen Queens
      </h1>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.15em', color: ACCENT, textTransform: 'uppercase', marginBottom: 24 }}>
        N-Queens Puzzle — Team 5
      </p>
      <div style={{ background: 'var(--surface)', border: `1px solid ${ACCENT}30`, borderRadius: 12, padding: '32px 28px', color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>
        <p style={{ marginBottom: 16 }}>
          This game is under development by <strong style={{ color: 'var(--text)' }}>Team 5</strong>.
        </p>
        <p style={{ marginBottom: 16 }}>
          Algorithms to implement: <span style={{ color: ACCENT }}>Sequential backtracking</span> &amp; <span style={{ color: ACCENT }}>Threaded (Worker Threads)</span>
        </p>
        <p style={{ fontSize: 12 }}>
          See <code style={{ background: 'var(--surface2)', padding: '2px 6px', borderRadius: 4 }}>client/src/games/queens/README.md</code> to get started.
        </p>
      </div>
    </div>
  );
}
