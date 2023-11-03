import { ReactElement, ReactNode } from "react";

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

export interface IInput {
  name: string;
  type?: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  validation?: object;
  label?: string;
  required?: boolean;
  icon?: ReactNode | ReactElement;
}

export interface IdashboardSidebarItems {
  icon: ReactNode | ReactElement;
  title: string;
  link: string;
}
