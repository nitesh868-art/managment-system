import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './slices/employeeSlice';
import bankReducer from './slices/bankSlice';

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    banks: bankReducer,
  },
}); 