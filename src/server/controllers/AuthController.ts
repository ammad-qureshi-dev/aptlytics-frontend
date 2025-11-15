import { formatUrl } from "@/utils/StringUtils";
import { BaseController } from "./BaseController";
import { LoginRequest, RegistrationRequest, ServiceResponse } from "./Types";
import { SERVER_PATHS } from "@/routes/ServerPaths";

export class AuthController extends BaseController {
  private static SERVICE: string = "/v1/auth";
  private static BASE_PATH = process.env.NEXT_PUBLIC_SERVER_BASE_PATH;

  static async register(formData: RegistrationRequest) {
    const path = this.SERVICE + SERVER_PATHS.v1.auth.register;
    const response = await BaseController.getResponse(
      BaseController.axiosInstance.post<ServiceResponse>(
        this.BASE_PATH + path,
        formData
      )
    );

    return response;
  }

  static async login(formData: LoginRequest) {
    const path = this.SERVICE + SERVER_PATHS.v1.auth.login;
    const response = await BaseController.getResponse(
      BaseController.axiosInstance.post<ServiceResponse>(
        this.BASE_PATH + path,
        formData
      )
    );

    return response;
  }

  static async logout() {
    const path = this.SERVICE + SERVER_PATHS.v1.auth.logout;
    const response = await BaseController.getResponse(
      BaseController.axiosInstance.post<ServiceResponse>(path)
    );

    return response;
  }

  static async verifyAccount(userId: string) {
    const path = formatUrl(this.SERVICE + SERVER_PATHS.v1.auth.verifyAccount, {
      userId: userId,
    });
    const response = await BaseController.getResponse(
      BaseController.axiosInstance.post<ServiceResponse>(this.BASE_PATH + path)
    );

    return response;
  }
}
