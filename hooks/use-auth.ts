"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: number;
  nickName: string;
  email: string;
  avatarUrl: string;
  booksRead: number;
  meetingsAttended: number;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),
    }),
    {
      name: 'auth-storage',
    }
  )
);