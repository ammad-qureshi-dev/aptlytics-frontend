export type User = {
  email: string;
  fullName: string;
  phoneNumber: string;
  userId: string;
  lastSignedInAs: "OWNER" | "EMPLOYEE" | "CUSTOMER";
  contextId: string;
};
