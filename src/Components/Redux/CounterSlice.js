import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    incrementByNum: (state, action) => {
      state.count += action.payload;
    },
  }
});



export const {increment, decrement, incrementByNum} = counterSlice.actions

export default counterSlice.reducer;