import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../services/auth.services";

type UserState = {
  isLoggedIn: boolean;
  user: User | null;
};

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});
export const { setUser, clearUser } = user.actions;
export default user.reducer;

export const getUser = (state: any) => state.userState.user;
export const getLoggedIn = (state: any) => state.userState.isLoggedIn;
export const getShowModal = (state: any) => state.userState.showLoginModal;
export const getRegisterClicked = (state: any) =>
  state.userState.registerClicked;
