export interface RegisterData {
  name?: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface IAuthResponse {
  id: number | null;
  user?: object | null;
  token: string;
}

export interface IAuthError {
  status: number;
  error?: {
    data?: unknown;
  };
}
