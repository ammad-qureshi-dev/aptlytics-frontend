export type ResponseData = {
  description: string;
  responseType: string;
  responseSeverity: "ERROR" | "WARNING" | "INFO" | "SUCCESS";
};

export type ServiceResponse = {
  isSuccess: boolean;
  data: any;
  requestId: string;
  requestCompletedAt: Date;
  alerts: ResponseData[];
};
