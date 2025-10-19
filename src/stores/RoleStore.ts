"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface RoleStore {
  role: "OWNER" | "EMPLOYEE" | "CUSTOMER" | undefined;
  setRole: (role: "OWNER" | "EMPLOYEE" | "CUSTOMER" | undefined) => void;
  clearRole: () => void;
}

export const useRoleStore = create<RoleStore>()(
  persist(
    (set) => ({
      role: undefined,
      setRole: (role) => set({ role }),
      clearRole: () => set({ role: undefined }),
    }),
    {
      name: "role-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ role: state.role }),
    }
  )
);
