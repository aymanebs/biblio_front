import { createSlice } from '@reduxjs/toolkit';

const connectionStatus = localStorage.getItem('isConnected') === 'true';

console.log('connectionStatus',connectionStatus);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isConnected: connectionStatus,
    token: '',
  },
  reducers: {
    setUserLoggedIn: (state, action) => {
      state.isConnected = true;
      localStorage.setItem('isConnected','true');
      // state.token = action.payload.token;
    },
    setUserLoggedOut: (state) => {
      state.isConnected = false;
      localStorage.removeItem('isConnected');
      state.token = '';
    },
  },
});

export const { setUserLoggedIn, setUserLoggedOut } = userSlice.actions;
export default userSlice.reducer;
