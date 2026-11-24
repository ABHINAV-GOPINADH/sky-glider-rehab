import NeckHorizontalModule from './NeckHorizontalModule';

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="app-header-left">
          <span className="app-logo">✈️ HappyMoves Arcade</span>
          <span className="app-badge">Cervical Lateral Rotation</span>
        </div>
        <div className="app-header-right">
          <span className="app-status-tag">🟢 Live AI Tracking</span>
        </div>
      </header>

      <main className="app-main">
        <NeckHorizontalModule />
      </main>
    </div>
  );
}

