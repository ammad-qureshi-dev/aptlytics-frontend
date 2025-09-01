import { ReactNode } from "react";

export type FormInputType = {
  label: string;
  inputType: string;
  placeHolder?: string;
  value: any;
  onValueChange: (newValue: any) => void;
  css?: string;
  isRequired?: boolean;
};

export type GridComponentType = {
  cols: number;
  gap: number;
  children: ReactNode;
  className?: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
  fullName: string;
  phoneNumber: string;
};
