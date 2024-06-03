import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
   email: string | null;
   address: string | null;
   token: string | null;
};

const initialState: TInitialState = {
   email: null,
   address: null,
   token: null,
};

const userSlice = createSlice({
   name: "userSlice",
   initialState,
   reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
