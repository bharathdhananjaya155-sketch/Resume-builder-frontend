export const BASE_URL = "http://localhost:8080";

// utils/apiPaths.js
export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    PROFILE: "/api/auth/profile",
    UPLOAD_IMAGE: "/api/auth/upload-image",
    TEMPLATES: "/api/auth/templates",
  },
  RESUME: {
    CREATE: "/api/resume",
    GET_ALL: "/api/resume",
    GET_BY_ID: (id) => `/api/resume/${id}`,
    UPDATE: (id) => `/api/resume/${id}`,
    DELETE: (id) => `/api/resume/${id}`,
    UPLOAD_IMAGES: (id) => `/api/resume/${id}/upload-images`,
  },
  PAYMENT: {
    CREATE_ORDER: "/api/payment/create-order",
    VERIFY: "/api/payment/verify",
    HISTORY: "/api/payment/history",
    ORDER_DETAILS: (orderId) => `/api/payment/order/${orderId}`,
  },
};
