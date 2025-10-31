export const CLIENT_PATHS = {
  appointments: {
    base: "/appointments",
  },
  auth: {
    base: "/auth",
    accounts: "/auth/accounts",
    login: "/auth/login",
    register: "/auth/register",
    verifyAccountByUserId: "/auth/verify-account/:userId",
    verifyAccount: "/auth/verify-account",
    passwordReset: "/auth/password-reset",
  },
  business: {
    base: "/business",
    registration: "/business/registration",
    services: "/business/services",
  },
  customers: {
    base: "/customers",
    addCustomer: "/customers/add-customer",
    addCustomerV2: "/customers/add-customer-v2",
  },
  dashboard: {
    base: "/dashboard",
  },
  gettingStarted: {
    base: "/getting-started",
    businessRegistration: "/getting-started/business-registration",
    employeeRegistration: "/getting-started/employee-registration",
  },
  notifications: {
    base: "/notifications",
  },
  profile: {
    base: "/profile",
  },
  test: {
    base: "/test",
  },
};
