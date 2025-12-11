import axios from "axios";
import { getCookie } from "cookies-next";
import { toast } from "sonner";

const instance = axios.create({
  baseURL: `https://api.imothmr.com/api/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

// =========================
// Request Interceptor
// =========================
instance.interceptors.request.use(
  (config) => {
    const token = getCookie("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// =========================
// Response Interceptor
// =========================
instance.interceptors.response.use(
  (response) => response,

  (error) => {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message ||
        "حدث خطأ أثناء تنفيذ الطلب. برجاء المحاولة لاحقًا.";

      toast.error(message);
    } else {
      toast.error("حدث خطأ غير متوقع.");
    }

    return Promise.reject(error);
  }
);

export default instance;
