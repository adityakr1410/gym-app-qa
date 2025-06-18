import { createSlice } from '@reduxjs/toolkit';

interface mobileMenuState {
  isVisible: boolean;
}

const initialState: mobileMenuState = {
  isVisible: false,
};

const mobileMenuSlice = createSlice({
  name: 'userDropdown',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      console.log('Toggle dropdown action dispatched');
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
