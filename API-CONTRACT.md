# Spark Admin API Contract

Base URL: `http://localhost:5000/api`

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/auth/login` | Authenticate admin |
| GET | `/dashboard/summary` | Dashboard KPI + chart data |
| GET/POST | `/users` | List/create users |
| PUT/DELETE | `/users/:id` | Update/delete user |
| GET/POST | `/customers` | List/create customers |
| GET/POST | `/products` | List/create products |
| GET/POST | `/sales` | List/create sales |

All resource endpoints currently return empty data or an integration-ready response.
