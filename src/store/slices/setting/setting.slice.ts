import { createSlice } from "@reduxjs/toolkit";
import { MODE } from "../../../common/constants/setting.constant";
import { PaletteMode } from "@mui/material";

type TInitialState = {
   mode: PaletteMode;
};

const initialState: TInitialState = {
   mode: (localStorage.getItem(MODE) as PaletteMode) || `light`,
};

const settingSlice = createSlice({
   name: `settingSlice`,
   initialState,
   reducers: {
      SET_MODE: (state, { payload }) => {
         localStorage.setItem(MODE, payload);
         state.mode = payload;
      },
   },
});

export const { SET_MODE } = settingSlice.actions;

export default settingSlice.reducer;
