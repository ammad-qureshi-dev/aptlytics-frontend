import { ServicePayload } from "@/components/forms/Types";
import { BaseController } from "./BaseController";
import { ServiceResponse } from "./Types";

export class ServicesController extends BaseController {
  private static ENDPOINT: string = "/v1/services";

  static async addServices(businessId: string, services: ServicePayload[]) {
    const response = await BaseController.getResponse(
      BaseController.axiosInstance.post<ServiceResponse>(
        BaseController.BACKEND_ENDPOINT_API + this.ENDPOINT + "/" + businessId,
        services
      )
    );

    return response;
  }
}
