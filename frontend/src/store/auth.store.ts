"use client";

import { create } from "zustand";

import { authService } from "@/services/auth.service";
import type { User } from "@/types/auth";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  setUser: (user: User | null) => void;

  fetchCurrentUser: () => Promise<void>;

  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  isAuthenticated: false,

  isLoading: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  fetchCurrentUser: async () => {
    set({ isLoading: true });

    try {
      const response = await authService.getCurrentUser();
      
      console.log(response);
      console.log(response.data);
      set({
        user: response.data,
        isAuthenticated: true,
      });
    } catch {
      set({
        user: null,
        isAuthenticated: false,
      });
    } finally {
      set({
        isLoading: false,
      });
    }
  },

  logout: () => {
    set({
      user: null,
      isAuthenticated: false,
    });
  },
}));