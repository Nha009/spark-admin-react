@echo off
echo Starting Spark Admin Backend...
start cmd /k "cd backend && npm install && npm run dev"
timeout /t 2 >nul
echo Starting Spark Admin Frontend...
start cmd /k "cd frontend && npm install && npm run dev"
echo Done.
