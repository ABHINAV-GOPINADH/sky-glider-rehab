import type { ReactNode } from 'react';
import { Camera, CameraOff, LoaderCircle, RefreshCw, ShieldCheck } from 'lucide-react';
import type { ErrorGuidance } from '@/services/camera/errorMessages';
import './camera.css';

/** Shown before the camera starts: explains why access is needed, then asks. */
export function CameraPermissionPrompt({ onEnable }: { onEnable: () => void }) {
  return (
    <div className="camera-view__overlay">
      <div className="camera-view__overlay-inner">
        <span className="camera-view__glyph">
          <Camera size={30} aria-hidden="true" />
        </span>
        <h3>Enable the camera to begin</h3>
        <p>
          Your browser will ask for permission. Video is analysed on this device only and is never recorded or uploaded.
        </p>
        <button
          type="button"
          onClick={onEnable}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 24px',
            borderRadius: '9999px',
            background: '#10b981',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '1rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
          }}
        >
          <Camera size={18} aria-hidden="true" />
          <span>Enable Camera & Begin</span>
        </button>
        <p className="camera-view__hints" style={{ listStyle: 'none', padding: 0 }}>
          <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
            <ShieldCheck size={16} aria-hidden="true" /> Stand or sit about 1–1.5 m away with your head and shoulders in view.
          </span>
        </p>
      </div>
    </div>
  );
}

/** Translucent busy state shown while the camera or model is starting. */
export function CameraBusy({ label }: { label: string }) {
  return (
    <div className="camera-view__overlay camera-view__overlay--translucent" role="status" aria-live="polite">
      <div className="camera-view__overlay-inner">
        <LoaderCircle
          size={34}
          className="spinner-icon"
          aria-hidden="true"
          style={{ animation: 'spin 1s linear infinite' }}
        />
        <p>{label}</p>
      </div>
    </div>
  );
}

/** Error state with guidance and a retry button. */
export function CameraErrorOverlay({
  guidance,
  onRetry,
  extra,
}: {
  guidance: ErrorGuidance;
  onRetry: () => void;
  extra?: ReactNode;
}) {
  return (
    <div className="camera-view__overlay" role="alert">
      <div className="camera-view__overlay-inner">
        <span className="camera-view__glyph" style={{ background: 'rgba(248,113,113,0.16)', color: '#fca5a5' }}>
          <CameraOff size={30} aria-hidden="true" />
        </span>
        <h3>{guidance.title}</h3>
        <p>{guidance.message}</p>
        <ul className="camera-view__hints">
          {guidance.hints.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <button
          type="button"
          onClick={onRetry}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '8px',
            background: '#f59e0b',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '0.9rem',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <RefreshCw size={18} aria-hidden="true" />
          <span>Try again</span>
        </button>
        {extra}
      </div>
    </div>
  );
}
