import { LoginData, RegisterData } from "../../../types/authTypes";
import { baseApi } from "../../app/baseApi";
export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation<RegisterData, void>({
      query: (registerData) => ({
        url: `/register`,
        method: "POST",
        data: registerData,
      }),
    }),
    userLogin: builder.mutation<LoginData, void>({
      query: (loginData) => ({
        url: `login`,
        method: "POST",
        data: loginData,
      }),
    }),
  }),
});

export const { useUserRegisterMutation, useUserLoginMutation } = authApi;
