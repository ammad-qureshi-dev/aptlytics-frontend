import axios, { AxiosError, AxiosResponse } from "axios";
import { ResponseData, ServiceResponse } from "./Types";
import { toast } from "react-toastify";

export class BaseController {
  static BACKEND_ENDPOINT_API: string = "http://localhost:8080/api";

  static axiosInstance = axios.create({
    baseURL: BaseController.BACKEND_ENDPOINT_API,
    withCredentials: true,
  });

  static async getResponse(
    request: Promise<AxiosResponse<ServiceResponse>>
  ): Promise<ServiceResponse> {
    try {
      const response = await request;
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        this.displayAlertToasts(error.response?.data?.alerts ?? []);
        // ToDo: redirect to login page on 403/401
        return (
          error.response?.data ?? {
            responseType: "ERROR",
            description: error.message,
            responseSeverity: "ERROR",
            alerts: [],
          }
        );
      }
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
