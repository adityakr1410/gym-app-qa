import { configureStore } from '@reduxjs/toolkit';
import userDropdownReducer from '../slices/userDropdownSlice';
import mobileMenuReducer from '../slices/mobileMenuSlice';

// Example slice (you can replace this with your actual slices)
const store = configureStore({
  reducer: {
    userDropdown: userDropdownReducer,
    mobileMenu: mobileMenuReducer,
  },
});

// Export store and types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
