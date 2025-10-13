import { BaseController } from "./BaseController";
import { ServiceResponse } from "./Types";

export class UserController extends BaseController {
  private static ENDPOINT: string = "/v1/user";

  static async getMe() {
    const response = await BaseController.getResponse(
      BaseController.axiosInstance.get<ServiceResponse>(
        BaseController.BACKEND_ENDPOINT_API + this.ENDPOINT + "/me"
      )
    );

    return response.data;
  }

  static async getUserProfiles() {
    const response = await BaseController.getResponse(
      BaseController.axiosInstance.get<ServiceResponse>(
        BaseController.BACKEND_ENDPOINT_API + this.ENDPOINT + "/user-profiles"
      )
    );

    return response.data;
  }

  static async switchProfile(contextId: string, role: string) {
    const response = await BaseController.getResponse(
      BaseController.axiosInstance.post<ServiceResponse>(
        BaseController.BACKEND_ENDPOINT_API +
          this.ENDPOINT +
          `/switch-profile/${contextId}?activeProfile=${role}`
      )
    );

    return response;
  }
}
