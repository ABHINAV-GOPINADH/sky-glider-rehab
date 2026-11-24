# Sky Glider: Aero Quest | Rehabilitation Game

A game-first, full-screen arcade telerehabilitation module for active **Cervical Lateral Rotation** ($0^\circ \to 70^\circ$).

Powered by real-time client-side MediaPipe Pose tracking and Web Audio API.

---

## Features
- **Game-First Experience**: 100% full-viewport 2D arcade game with dynamic parallax sky gradients, drifting clouds, rolling hills, and an aerodynamic Sky Glider aircraft with responsive banking roll and dual jet engine flame trails.
- **Invisible Camera Tracking**: Pose detection runs at 60 FPS silently in the background. Optional mini webcam Picture-in-Picture (PIP) preview available via HUD toggle.
- **Silent Clinical Analytics**: Measures left & right cervical rotation range of motion, head yaw ratio, and bilateral symmetry balance ($0\% \to 100\%$) without cluttering the screen.
- **Mission Lifecycle**: Mission Briefing $\to$ 3-2-1 Countdown $\to$ 60 FPS Flight $\to$ Victory Celebration with 1–3 star ratings and therapist summary report card.
- **Zero Backend Required**: Runs 100% client-side in modern web browsers over HTTPS.

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

Visit `http://localhost:5173` in Google Chrome and allow camera access.

---

## Instant Deployment

### Option A: Vercel (Recommended)
1. Push this folder to a GitHub repository.
2. Import project on [vercel.com](https://vercel.com).
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Option B: Netlify
1. Connect repository on [netlify.com](https://netlify.com).
2. Publish directory: `dist`.
3. Click **Deploy**.

