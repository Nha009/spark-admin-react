# Spark Admin — Modern React + Backend Starter

A professional, empty-but-ready admin dashboard starter inspired by the provided Spark Admin screenshots.

## Stack
- Frontend: React + Vite + React Router + Axios + Lucide React
- Backend: Node.js + Express + CORS + dotenv
- API-ready architecture with a single Axios client
- Responsive sidebar/topbar/dashboard layout
- Empty states instead of hard-coded business data

## Run

### 1. Backend
```bash
cd backend
npm install
npm run dev
```
Backend runs on `http://localhost:5000`.

### 2. Frontend
Open a second terminal:
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on the Vite URL shown in the terminal (normally `http://localhost:5173`).

## Frontend ↔ Backend
Create `frontend/.env` from `.env.example`:

```env
VITE_API_URL=http://localhost:5000/api
```

The frontend uses `src/services/api.js` as the single API entry point.

## Included Pages
- Login
- Dashboard
- Users
- Customers
- Products
- Sales
- Reports
- Settings

The tables intentionally start empty so you can connect your own database/API without removing demo data.

## Suggested next step
Connect the Express route stubs to MySQL/PostgreSQL/MongoDB and replace the empty-state service methods with real API calls.
