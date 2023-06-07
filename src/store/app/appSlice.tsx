import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface appState {
  openSidebar: boolean;
  isLogged: boolean;
  userToken: string;
}

const initialState: appState = {
  openSidebar: false,
  isLogged: false,
  userToken: "",
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
  },
});

export const { setSidebarState, setIsLogged, setUserToken } = appSlice.actions;

export default appSlice.reducer;
