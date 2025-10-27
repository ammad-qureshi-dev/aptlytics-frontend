import { RegisterBusinessRequest } from "@/components/forms/Types";
import { BaseController } from "./BaseController";
import { ServiceResponse } from "./Types";

export class BusinessController extends BaseController {
  private static ENDPOINT: string = "/v1/business";

  static async register(formData: RegisterBusinessRequest) {
    const response = await BaseController.getResponse(
      BaseController.axiosInstance.post<ServiceResponse>(
        BaseController.BACKEND_ENDPOINT_API + this.ENDPOINT + "/register",
        formData
      )
    );

    return response;
  }
}
