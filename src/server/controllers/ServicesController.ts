import { ServicePayload } from "@/components/forms/Types";
import { BaseController } from "./BaseController";
import { ServiceResponse } from "./Types";
import { SERVER_PATHS } from "@/routes/ServerPaths";
import { formatUrl } from "@/utils/StringUtils";

export class ServicesController extends BaseController {
  private static ENDPOINT: string = "/v1/services";
  private static BASE_SERVER_PATH = process.env.NEXT_PUBLIC_SERVER_BASE_PATH;

  static async addServices(businessId: string, services: ServicePayload[]) {
    const endpoint = formatUrl(SERVER_PATHS.v1.services.addServices, {
      businessId: businessId,
    });

    const response = await BaseController.getResponse(
      BaseController.axiosInstance.post<ServiceResponse>(
        this.BASE_SERVER_PATH + this.ENDPOINT + endpoint,
        services
      )
    );

    return response;
  }
}
