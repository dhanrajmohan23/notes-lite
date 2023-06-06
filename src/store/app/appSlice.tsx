import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface appState {
  openSidebar: boolean;
}

const initialState: appState = {
  openSidebar: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSidebarState: (state, action: PayloadAction<boolean>) => {
      state.openSidebar = action.payload;
    },
  },
});

export const { setSidebarState } = appSlice.actions;

export default appSlice.reducer;
