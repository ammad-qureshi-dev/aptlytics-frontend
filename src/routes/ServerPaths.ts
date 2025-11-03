export const SERVER_PATHS = {
  v1: {
    auth: {
      verifyAccount: "/verify-account/:userId",
      register: "/register",
      login: "/login",
      logout: "/logout",
    },
    user: {
      switchProfile: "/switch-profile/:contextId",
      profiles: "/profiles",
      currentProfile: "/profiles/current",
      me: "/me",
    },
    business: {
      register: "/register",
      findBusinessById: "/:businessId",
    },
    services: {
      addServices: "/:businessId",
    },
  },
};
