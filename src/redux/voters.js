import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  voterFound: {},
};

export const votersSlice = createSlice({
  name: "voters",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    setVoterFound: (state, action) => {
      const voterFound = action.payload;
      state.voterFound = voterFound;
    },
    setLogin: (state, action) => {
      const data = action.payload;
      if (data.phoneNumber) {
        state.phoneNumber = data.phoneNumber;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setVoterFound, setLogin } = votersSlice.actions;

export default votersSlice.reducer;
