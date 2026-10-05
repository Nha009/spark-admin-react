import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("spark_admin_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const authApi = {
  login: (payload) => api.post("/auth/login", payload),
};

export const dashboardApi = {
  summary: () => api.get("/dashboard/summary"),
};

export const usersApi = {
  list: () => api.get("/users"),
  create: (payload) => api.post("/users", payload),
  update: (id, payload) => api.put(`/users/${id}`, payload),
  remove: (id) => api.delete(`/users/${id}`),
};

export const customersApi = {
  list: () => api.get("/customers"),
};

export const productsApi = {
  list: () => api.get("/products"),
};

export const salesApi = {
  list: () => api.get("/sales"),
  create: (payload) => api.post("/sales", payload),
};

export default api;
