import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
  loading: false,
  error: null,
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push({
        id: Date.now(),
        ...action.payload,
      });
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
    },
    updateEmployee: (state, action) => {
      const index = state.employees.findIndex(
        (employee) => employee.id === action.payload.id
      );
      if (index !== -1) {
        state.employees[index] = action.payload;
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addEmployee,
  deleteEmployee,
  updateEmployee,
  setLoading,
  setError,
} = employeeSlice.actions;

export default employeeSlice.reducer; 