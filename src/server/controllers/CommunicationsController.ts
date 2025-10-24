import { BaseController } from "./BaseController";
import { CommsRequest, ServiceResponse } from "./Types";

export class CommunicationsController extends BaseController {
  private static ENDPOINT: string = "/v1/comms";

  static async send(commsType: "EMAIL" | "PHONE", commsRequest: CommsRequest) {
    const response = await BaseController.getResponse(
      BaseController.axiosInstance.post<ServiceResponse>(
        BaseController.BACKEND_ENDPOINT_API +
          this.ENDPOINT +
          "/send?commsType=" +
          commsType,
        commsRequest
      )
    );

    return response;
  }
}
