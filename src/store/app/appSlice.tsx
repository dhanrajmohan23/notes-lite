import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import axios from "axios";

export interface appState {
  openSidebar: boolean;
  isLogged: boolean;
  userToken: string;
  userName: string;
  userEmail: string;
}

const initialState: appState = {
  openSidebar: false,
  isLogged: false,
  userToken: "",
  userName: "",
  userEmail: "",
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSidebarState: (state, action: PayloadAction<boolean>) => {
      state.openSidebar = action.payload;
    },
    setIsLogged: (state, action: PayloadAction<boolean>) => {
      state.isLogged = action.payload;
    },
    setUserToken: (state, action: PayloadAction<string>) => {
      state.userToken = action.payload;
    },
    setCurrentUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setCurrentUserEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
  },
});

export const {
  setSidebarState,
  setIsLogged,
  setUserToken,
  setCurrentUserName,
  setCurrentUserEmail,
} = appSlice.actions;

export default appSlice.reducer;
