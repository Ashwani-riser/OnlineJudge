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

export interface AuthResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    user: User;
    isEmailVerified: boolean;
  };
}