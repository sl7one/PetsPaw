'use client';

import { createSlice } from '@reduxjs/toolkit';

type InitialStateType = {
   count: number
}

const initialState:InitialStateType = {
   count: 0,
};

export const counterSlice = createSlice({
   name: 'counter',
   initialState,
   reducers: {
      increment: (state) => {
         state.count += 1;
      },
   },
});

export const {increment} = counterSlice.actions;
export default counterSlice.reducer
