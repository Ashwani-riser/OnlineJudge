import { api } from "./api";
import type {
  LoginPayload,
  SignupPayload,
  AuthResponse,
} from "@/types/auth";

class AuthService {
  async signup(data: SignupPayload): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/register", data);
    return response.data;
  }

  async login(data: LoginPayload): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>("/login", data);
    return response.data;
  }

  async verifyEmail(token: string): Promise<AuthResponse> {
    const response = await api.get<AuthResponse>(`/verify-email/${token}`);
    return response.data;
  }

  async resendVerification(email: string): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>(
      "/resend-verification",
      { email }
    );

    return response.data;
  }

  async forgotPassword(email: string): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>(
      "/forgot-password",
      { email }
    );

    return response.data;
  }

  async resetPassword(
    token: string,
    password: string
  ): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>(
      `/reset-password/${token}`,
      { password }
    );

    return response.data;
  }

  async getCurrentUser(): Promise<AuthResponse> {
    const response = await api.get<AuthResponse>("/currentUser");
    return response.data;
  }
}

export const authService = new AuthService();