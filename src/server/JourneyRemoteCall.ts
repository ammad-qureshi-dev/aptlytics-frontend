import { JourneyAction } from "@/components/journey/JourneyConfig";
import axios from "axios";
import { ServiceResponse } from "./Types";

export class RemoteCall {
  // ToDo: replace endpoint based on ENV VAR
  static BACKEND_API_ENDPOINT: string = "http://localhost:8080/api/v1";

  static async sendRequestToServer(
    journeyAction: JourneyAction,
    formData: any
  ): Promise<ServiceResponse> {
    const { method } = journeyAction;
    switch (method) {
      case "GET": {
        return this.getRequest(journeyAction, formData);
      }

      case "POST": {
        return this.postRequest(journeyAction, formData);
      }

      default:
        throw new Error("method=" + method + " does not exist");
    }
  }

  private static async postRequest(
    journeyRequest: JourneyAction,
    formData: any
  ): Promise<ServiceResponse> {
    if (!formData) {
      return {
        isSuccess: false,
        requestCompletedAt: new Date(),
        alerts: [
          {
            responseSeverity: "ERROR",
            description: "Form Data required",
            responseType: "NETWORK_ERROR",
          },
        ],
      } as ServiceResponse;
    }

    const finalUrl = this.formatUrl(journeyRequest, formData);

    try {
      const response = await axios.post<ServiceResponse>(finalUrl, formData);
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.response?.data) {
          return e.response.data as ServiceResponse;
        }
        return {
          description: e.message,
          responseType: "NETWORK_ERROR",
          responseSeverity: "ERROR",
        } as unknown as ServiceResponse;
      }
      throw e;
    }
  }

  private static async getRequest(
    journeyRequest: JourneyAction,
    formData: any
  ): Promise<ServiceResponse> {
    const finalUrl = this.formatUrl(journeyRequest, formData);

    try {
      const response = await axios.get<ServiceResponse>(finalUrl);
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.response?.data) {
          return e.response.data as ServiceResponse;
        }
        return {
          description: e.message,
          responseType: "NETWORK_ERROR",
          responseSeverity: "ERROR",
        } as unknown as ServiceResponse;
      }
      throw e;
    }
  }

  private static formatUrlWithPathVariables(
    url: string,
    formData: any,
    pathVariables: string[]
  ): string {
    let finalUrl = url;

    if (!formData) {
      console.warn("Empty formData provided");
      return finalUrl;
    }

    for (const pathVariable of pathVariables) {
      if (Object.keys(formData).includes(pathVariable)) {
        const value: any = formData[pathVariable];
        finalUrl = finalUrl.replace("{" + pathVariable + "}", value);
      }
    }

    return finalUrl;
  }

  private static formatUrlWithRequestParams(
    url: string,
    formData: any,
    requestParams: string[]
  ): string {
    if (!formData) {
      console.warn("Empty formData provided");
      return url;
    }

    let finalUrl = url + "?";

    for (const requestParam of requestParams) {
      const value: any = formData[requestParam];
      if (!Array.isArray(value)) {
        finalUrl += requestParam + "=" + value + "&";
      } else {
        throw new Error("Cannot parse arrays");
      }
    }

    // remove the & from the end
    return finalUrl.slice(0, -1);
  }

  private static formatUrl(
    journeyRequest: JourneyAction,
    formData: any
  ): string {
    const { url, pathVariables, requestParams } = journeyRequest;
    let finalUrl = url;

    if (pathVariables) {
      finalUrl = this.formatUrlWithPathVariables(
        finalUrl,
        formData,
        pathVariables
      );
    }

    if (requestParams) {
      finalUrl = this.formatUrlWithRequestParams(
        finalUrl,
        formData,
        requestParams
      );
    }

    return this.BACKEND_API_ENDPOINT + finalUrl;
  }
}
