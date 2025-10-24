import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { ResponseData, ServiceResponse } from "./Types";
import { useUserStore } from "@/stores/UserStore";

export class BaseController {
  static BACKEND_ENDPOINT_API = "http://localhost:8080/api";
  private static isRedirecting = false;

  static axiosInstance = axios.create({
    baseURL: BaseController.BACKEND_ENDPOINT_API,
    withCredentials: true,
  });

  static initializeInterceptors() {
    if ((this.axiosInstance.interceptors.response as any)._initialized) return;
    (this.axiosInstance.interceptors.response as any)._initialized = true;

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const status = error.response?.status;
        const url = error.config?.url;

        // Only redirect on 401 if NOT /login or /signup
        if (
          status === 401 &&
          !this.isRedirecting &&
          url !== "/auth/login" &&
          url !== "/auth/register"
        ) {
          this.isRedirecting = true;
          toast.error("Session expired. Redirecting to login...");
          useUserStore.getState().clearUser();
          setTimeout(() => {
            window.location.href = "/auth/login";
          }, 1500);
        }

        return Promise.reject(error);
      }
    );
  }

  static async getResponse<T = any>(
    request: Promise<AxiosResponse<ServiceResponse>>
  ): Promise<ServiceResponse> {
    try {
      const response = await request;
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const alerts = error.response?.data?.alerts ?? [];
        this.displayAlertToasts(alerts);

        return (
          error.response?.data ?? {
            responseType: "ERROR",
            description: error.message ?? "Unknown error",
            responseSeverity: "ERROR",
            alerts: [],
          }
        );
      }

      toast.error("Unexpected error occurred: " + (error as Error).message);
      throw error;
    }
  }

  static displayAlertToasts(alerts: ResponseData[] = []) {
    for (const alert of alerts) {
      switch (alert?.responseSeverity) {
        case "ERROR":
          toast.error(alert?.description ?? "Internal Server Error");
          break;
        case "WARNING":
          toast.warning(alert?.description);
          break;
        case "SUCCESS":
          toast.success(alert?.description);
          break;
        default:
          toast.info(alert?.description);
          break;
      }
    }
  }
}

// Initialize interceptors globally
// BaseController.initializeInterceptors();
