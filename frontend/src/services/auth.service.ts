import { api } from "./api";

import type {
  SignupPayload,
  LoginPayload,
  User,
  ApiResponse,
  LoginResponse,
  MessageResponse,
} from "@/types/auth";

class AuthService {
  // Register
  async signup(
    data: SignupPayload
  ): Promise<MessageResponse> {
    const response = await api.post<MessageResponse>(
      "/users/register",
      data
    );

    return response.data;
  }

  // Login
  async login(
    data: LoginPayload
  ): Promise<ApiResponse<LoginResponse>> {
    const response = await api.post<ApiResponse<LoginResponse>>(
      "/users/login",
      data
    );

    return response.data;
  }

  // Verify Email
  async verifyEmail(
    token: string
  ): Promise<MessageResponse> {
    const response = await api.get<MessageResponse>(
      `/users/verify-email/${token}`
    );

    return response.data;
  }

  // Resend Verification
  async resendVerification(
    email: string
  ): Promise<MessageResponse> {
    const response = await api.post<MessageResponse>(
      "/users/resend-verification",
      { email }
    );

    return response.data;
  }

  // Forgot Password
  async forgotPassword(
    email: string
  ): Promise<MessageResponse> {
    const response = await api.post<MessageResponse>(
      "/users/forgot-password",
      { email }
    );

    return response.data;
  }

  // Reset Password
  async resetPassword(
    token: string,
    password: string
  ): Promise<MessageResponse> {
    const response = await api.post<MessageResponse>(
      `/users/reset-password/${token}`,
      { password }
    );

    return response.data;
  }

  // Current User
  async getCurrentUser(): Promise<ApiResponse<User>> {
    const response = await api.get<ApiResponse<User>>(
      "/users/currentUser"
    );

    return response.data;
  }
}

export const authService = new AuthService();