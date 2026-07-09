export interface SignupPayload {
  username: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  role: "user" | "admin";
  isEmailVerified: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export interface LoginResponse {
  user: User;
}

export type MessageResponse = ApiResponse<null>;