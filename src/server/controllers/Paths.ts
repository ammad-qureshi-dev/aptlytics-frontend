export const BASE_PATH_V1: string = "/api/v1";
export const V1: string = "/v1";

export const Paths = {
  v1: {
    auth: {
      verifyAccount: "/verify-account/%s",
      register: "/register",
      login: "/login",
      logout: "/logout",
    },
    user: {
      switchProfile: "/switch-profile/%s",
      profiles: "/profiles",
      currentProfile: "/profiles/current",
      me: "/me",
    },
    business: {
      register: "/register",
    },
  },
};
