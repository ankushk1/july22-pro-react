import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Components/Redux/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

// {
//   counter: {
//     count: 0;
//   }
// }
