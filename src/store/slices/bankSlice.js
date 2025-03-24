import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  banks: [],
  loading: false,
  error: null,
};

const bankSlice = createSlice({
  name: 'banks',
  initialState,
  reducers: {
    addBank: (state, action) => {
      state.banks.push({
        id: Date.now(),
        ...action.payload,
      });
    },
    deleteBank: (state, action) => {
      state.banks = state.banks.filter(
        (bank) => bank.id !== action.payload
      );
    },
    updateBank: (state, action) => {
      const index = state.banks.findIndex(
        (bank) => bank.id === action.payload.id
      );
      if (index !== -1) {
        state.banks[index] = action.payload;
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
  addBank,
  deleteBank,
  updateBank,
  setLoading,
  setError,
} = bankSlice.actions;

export default bankSlice.reducer; 