import { RegisterBusinessRequest } from "@/components/forms/Types";
import { BaseController } from "./BaseController";
import { ServiceResponse } from "./Types";
import { urlFormat } from "@/utils/StringUtils";
import { SERVER_PATHS } from "@/routes/ServerPaths";

export class BusinessController extends BaseController {
  private static SERVER_PATH = process.env.NEXT_PUBLIC_SERVER_BASE_PATH;
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

  static async getBusinessById(businessId: string) {
    debugger;

    const endpoint =
      this.SERVER_PATH +
      this.ENDPOINT +
      urlFormat(SERVER_PATHS.v1.business.findBusinessById, {
        businessId: businessId,
      });

    const response = await BaseController.getResponse(
      BaseController.axiosInstance.get<ServiceResponse>(endpoint)
    );

    return response.data;
  }
}
