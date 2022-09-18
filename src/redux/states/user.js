import { createSlice } from '@reduxjs/toolkit';

export const UserEmptyState = {
  name: '',
  email: ''
};
export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:UserEmptyState
  },  
  reducers: {
    createUser: (state, action) => {
      state.user= action.payload;
    },
    modifyUser: (state, action) => {      
      state.user= action.payload      
    },
    resetUser: (state,action) => {
      state.user = UserEmptyState;      
    }
  }
});

export const { createUser, modifyUser, resetUser } = userSlice.actions;
