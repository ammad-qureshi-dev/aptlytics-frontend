import { ReactNode } from "react";

export type FormInputType = {
  label: string;
  inputType: string;
  placeHolder?: string;
  value: any;
  onValueChange: (newValue: any) => void;
  width?: string;
  isRequired?: boolean;
};

export type GridComponentType = {
  cols: number;
  gap: number;
  children: ReactNode;
  className?: string;
};

export type LoginRequest = {
  email?: string;
  password?: string;
  phoneNumber?: string;
  loginMethod: "EMAIL" | "PHONE";
  inputtedValue?: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
};

export type AddCustomerRequest = {
  email: string | undefined;
  phoneNumber: string | undefined;
  fullName: string | undefined;
};

export type RegisterBusinessRequest = {
  name: string;
  address?: string;
  phoneNumber?: string;
  email?: string;
  description?: string;
};

export type ServicePayload = {
  name: string;
  description?: string;
  price: number;
  time: number;
  serviceLength: "MINUTE" | "HOUR" | "DAY" | "WEEK";
};
