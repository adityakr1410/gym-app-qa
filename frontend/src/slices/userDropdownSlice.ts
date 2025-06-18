import { createSlice } from '@reduxjs/toolkit';

interface UserDropdownState {
  isVisible: boolean;
}

const initialState: UserDropdownState = {
  isVisible: false,
};

const userDropdownSlice = createSlice({
  name: 'userDropdown',
  initialState,
  reducers: {
    toggleDropdown: (state) => {
      console.log('Toggle dropdown action dispatched');
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleDropdown } = userDropdownSlice.actions;
export default userDropdownSlice.reducer;
