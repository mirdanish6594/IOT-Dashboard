# Smart Bulb Monitoring System

A real-time monitoring system for smart street lights developed during Smart India Hackathon (SIH) 2024. The system provides continuous monitoring of leakage current and earthing status detection for electrical pole lights.

## Problem Statement

Railway stations and parking areas have numerous electrical pole lights that require constant monitoring for public safety. While these lights have earth leakage protection switchgear, malfunctions can pose risks. Manual inspection of system earthing requires significant manpower.

The solution provides:
- Continuous monitoring of earth leakage current
- Real-time earthing continuity checks
- Centralized monitoring system
- Automated alerts for maintenance teams
- Earth resistance value monitoring
- Instant notifications for deviations

## Features

- 🔌 Real-time monitoring of street lights
- 🗺️ Interactive map view with pole locations
- ⚡ Critical alerts dashboard
- 📊 Leakage current monitoring
- 🔋 Earthing status tracking
- 📱 Responsive design for all devices
- 🔔 Push notifications for critical alerts

## Tech Stack

- React
- TypeScript
- Vite
- Firebase Realtime Database
- React Router
- Leaflet Maps
- TailwindCSS

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Modern web browser

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/mirdanish6594/IOT-Dashboard.git
   cd IOT-Dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 in your browser

## Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── pages/         # Application pages/routes
├── types/         # TypeScript type definitions
└── utils/         # Utility functions and constants
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

Developed as part of Smart India Hackathon 2024 to address the challenge of monitoring the healthiness of earthing and leakage current detection in street light poles.
