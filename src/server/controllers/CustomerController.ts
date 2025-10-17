import { AddCustomerRequest } from "@/components/forms/Types";
import { BaseController } from "./BaseController";
import { ServiceResponse } from "./Types";

export class CustomerController extends BaseController {
  private static ENDPOINT: string = "/v1/customer";

  static async addCustomer(formData: AddCustomerRequest) {
    // ToDo: Get businessId from user

    const response = await BaseController.getResponse(
      BaseController.axiosInstance.post<ServiceResponse>(
        BaseController.BACKEND_ENDPOINT_API +
          this.ENDPOINT +
          "/b1114743-17d0-4766-be5c-fe5781b726d5",
        formData
      )
    );

    return response;
  }
}
