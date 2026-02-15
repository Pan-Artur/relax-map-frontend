import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:10000"
    : "https://relaxmap-backend.onrender.com";

const apiInstance = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

apiInstance.interceptors.request.use((config) => {
  const saved = localStorage.getItem("auth");
  const token = saved ? JSON.parse(saved).token : null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    const message =
      error?.response?.data?.message || error.message || "API error!";
    return Promise.reject(new Error(message));
  }
);

export const api = {
  login: (data) => apiInstance.post("/auth/login", data),
  register: (data) => apiInstance.post("/auth/register", data),
  me: () => apiInstance.get("/auth/me"),

  getUserById: (id) => apiInstance.get(`/users/${id}`),
  getUserLocations: (id) => apiInstance.get(`/users/${id}/locations`),

  getLocations: (params) => apiInstance.get("/locations", { params }),
  getLocationById: (id) => apiInstance.get(`/locations/${id}`),
  createLocation: (data) => apiInstance.post("/locations", data),
  updateLocation: (id, data) => apiInstance.put(`/locations/${id}`, data),
  deleteLocation: (id) => apiInstance.delete(`/locations/${id}`),

  getReviewsByLocation: (locationId) =>
    apiInstance.get(`/locations/${locationId}/reviews`),
  addReview: (locationId, data) =>
    apiInstance.post(`/locations/${locationId}/reviews`, data),
  deleteReview: (id) => apiInstance.delete(`/reviews/${id}`),

  getCategories: () => apiInstance.get("/categories"),

  uploadImage: (file) => {
    const formData = new FormData();
    
    formData.append("file", file);

    return apiInstance.post("/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export default apiInstance;
