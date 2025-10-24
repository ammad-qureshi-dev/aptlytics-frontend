export type ResponseData = {
  description: string;
  responseType: string;
  responseSeverity: "ERROR" | "WARNING" | "INFO" | "SUCCESS";
};

export type ServiceResponse = {
  success: boolean;
  data: any;
  requestId: string;
  requestCompletedAt: Date;
  alerts: ResponseData[];
};

export type RegistrationRequest = {
  fullName: string;
  email?: string;
  password: string;
  date?: Date;
  phoneNumber?: string;
};

export type LoginRequest = {
  email?: string;
  password?: string;
  phoneNumber?: string;
  loginMethod?: "PHONE" | "EMAIL";
};

export type UserProfile = {
  label: string;
  role: "CUSTOMER" | "EMPLOYEE" | "OWNER";
  contextId: string;
};

export type CommsRequest = {
  commsType: "PHONE" | "EMAIL";
  data?: any;
  recipient: string;
  subject: string;
  messageContent?: string;
  sendAt?: Date;
};
