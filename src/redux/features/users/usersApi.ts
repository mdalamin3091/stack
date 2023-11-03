/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../app/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    users: builder.query<Record<string, any>, any>({
      query: () => {
        return {
          url: "/users",
          method: "GET",
        };
      },
      // transformResponse: (response: IAdmin[], meta: IMeta) => {
      //   return {
      //     admins: response,
      //     meta,
      //   };
      // },
    }),
  }),
});

export const { useUsersQuery } = authApi;
