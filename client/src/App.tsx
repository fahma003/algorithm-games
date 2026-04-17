import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MinimumCostPage from './games/minimum-cost/MinimumCostPage';
import SnakeLadderPage from './games/snake-ladder/SnakeLadderPage';
import TrafficSimPage from './games/traffic/TrafficSimPage';
import KnightsTourPage from './games/knights-tour/KnightsTourPage';
import QueensPuzzlePage from './games/queens/QueensPuzzlePage';

const NAV_ITEMS = [
  { to: '/', label: 'Home', exact: true, accent: '#eef2ff' },
  { to: '/minimum-cost', label: 'Min Cost', accent: '#f59e0b' },
  { to: '/snake-ladder', label: 'Snake & Ladder', accent: '#10b981' },
  { to: '/traffic', label: 'Traffic', accent: '#38bdf8' },
  { to: '/knights-tour', label: "Knight's Tour", accent: '#a855f7' },
  { to: '/queens', label: '16-Queens', accent: '#fb7185' },
];

function Navbar() {
  const location = useLocation();
  return (
    <nav style={{ background: 'rgba(8,9,14,0.95)', borderBottom: '1px solid #1e2236', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 50 }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: '4px', height: '58px', overflowX: 'auto' }}>
        <span className="font-display" style={{ fontSize: '13px', fontWeight: 900, letterSpacing: '0.2em', color: '#eef2ff', marginRight: '20px', whiteSpace: 'nowrap', flexShrink: 0 }}>
          PDSA<span style={{ color: '#a855f7' }}>://</span>GAMES
        </span>
        {NAV_ITEMS.map((item) => {
          const isActive = item.exact ? location.pathname === item.to : location.pathname.startsWith(item.to);
          return (
            <NavLink key={item.to} to={item.to} style={{ padding: '5px 12px', borderRadius: '6px', fontSize: '11px', fontFamily: 'var(--font-body)', fontWeight: 600, letterSpacing: '0.06em', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0, color: isActive ? item.accent : '#5a6480', background: isActive ? `${item.accent}15` : 'transparent', border: `1px solid ${isActive ? `${item.accent}35` : 'transparent'}`, transition: 'all 0.2s', textTransform: 'uppercase' }}>
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1, maxWidth: '1400px', margin: '0 auto', width: '100%', padding: '28px 24px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/minimum-cost" element={<MinimumCostPage />} />
            <Route path="/snake-ladder" element={<SnakeLadderPage />} />
            <Route path="/traffic" element={<TrafficSimPage />} />
            <Route path="/knights-tour" element={<KnightsTourPage />} />
            <Route path="/queens" element={<QueensPuzzlePage />} />
          </Routes>
        </main>
        <footer style={{ borderTop: '1px solid #1e2236', padding: '14px 24px', textAlign: 'center', fontSize: '11px', color: '#3a4060', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>
          PDSA GAME APPLICATION // BSc COMPUTING 25.2 // NIBM // 2026
        </footer>
      </div>
    </BrowserRouter>
  );
}
