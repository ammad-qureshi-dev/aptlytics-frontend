import { create } from "zustand";
import { User } from "./Types";

interface UserStore {
  user: User | null;
  setUserInContext: (user: User) => void;
}

export const userStore = create<UserStore>((set) => ({
  user: null,
  setUserInContext: (user) => set(() => ({ user })),
}));
