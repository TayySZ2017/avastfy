# Avastfy für iPhone (iOS `.ipa`)

Die 1:1 iPhone-Version von **Avastfy** im **Liquid Glass Design** (Capacitor + React + TypeScript + Tailwind + Framer Motion):
- **Liquid Glass Studio** (Blur, Transparenz, Lichtbrechungs-Ränder, Squircle-Ecken, eigene Themes, Taptic-Engine-Haptik)
- **Adaptive Ambient Glow** + **Halo / Wave Audio-Visualizer**
- **Unzensierte Explicit-Suche** + **Version wechseln** (direkt über native iOS `CapacitorHttp` + YouTube Music / iOS Innertube API — komplett ohne `yt-dlp.exe`)
- **Spotify-Playlist-Import per Link** (Name, Cover & bis zu 100 Songs mit 1 Klick aus der Zwischenablage)
- **Synchronisierte LRCLIB-Lyrics** im Apple-Music-Stil (Auto-Scroll, Blur, Tippen springt zur Textzeile)
- **10-Band Equalizer + Bass-Boost + Slowed & Reverb + Nightcore + Crossfade/Gapless**
- **iOS Hintergrund-Audio (`UIBackgroundModes: audio`)** + Sperrbildschirm-Steuerung + Offline-Cache

---

## Fertige `Avastfy.ipa` bauen (OHNE Mac direkt von Windows aus!)

Da Apples Xcode nur auf macOS läuft, enthält dieses Projekt bereits die fertige GitHub-Actions-Pipeline `.github/workflows/build-ipa.yml`, die auf einem **kostenlosen macOS-Runner von GitHub** automatisch die fertige **`Avastfy.ipa`** kompiliert:

1. Erstelle ein neues (auch privates) Repository auf GitHub.
2. Pushe diesen Ordner `Avastfy-iOS` dorthin:
   ```powershell
   cd C:\Users\devin\.gemini\antigravity\scratch\Avastfy-iOS
   git init
   git add .
   git commit -m "Avastfy iOS"
   git branch -M main
   git remote add origin https://github.com/DEIN_NAME/Avastfy-iOS.git
   git push -u origin main
   ```
3. Öffne auf GitHub den Tab **Actions** → klicke auf den Workflow **„Build Avastfy iOS (.ipa)“**.
4. Nach ca. 4–5 Minuten kannst du unten unter **Artifacts** die fertige **`Avastfy.ipa`** direkt auf deinen PC herunterladen!

## `Avastfy.ipa` auf dem iPhone installieren (ohne 99 € Apple Developer Account)
- **Sideloadly (Windows, am einfachsten):** iPhone per USB verbinden → `Avastfy.ipa` in Sideloadly ziehen → mit deiner Apple-ID signieren → auf dem iPhone unter *Einstellungen → Allgemein → VPN & Geräteverwaltung* vertrauen.
- **AltStore / SideStore / TrollStore:** `Avastfy.ipa` einfach direkt in der jeweiligen App öffnen und installieren.

## Alternativ: Lokal auf einem Mac mit Xcode bauen
```bash
npm install
npm run build
npx cap add ios
npm run ios:sync
npx cap open ios
```
