import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../../types/authTypes";

const initialState: AuthState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ token: string }>) => {
      const { token } = action.payload;
      state.user = action.payload;
      state.token = token;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
