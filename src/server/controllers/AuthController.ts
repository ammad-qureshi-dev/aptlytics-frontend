import { BaseController } from "./BaseController";
import { LoginRequest, RegistrationRequest, ServiceResponse } from "./Types";

export class AuthController extends BaseController {
  private static ENDPOINT: string = "/v1/auth";

  static async register(formData: RegistrationRequest) {
    const response = await BaseController.getResponse(
      BaseController.axiosInstance.post<ServiceResponse>(
        BaseController.BACKEND_ENDPOINT_API + this.ENDPOINT + "/register",
        formData
      )
    );

    return response;
  }

  static async login(formData: LoginRequest) {
    const response = await BaseController.getResponse(
      BaseController.axiosInstance.post<ServiceResponse>(
        BaseController.BACKEND_ENDPOINT_API + this.ENDPOINT + "/login",
        formData
      )
    );

    return response;
  }
}
