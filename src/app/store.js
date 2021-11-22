import { configureStore } from '@reduxjs/toolkit';
import riskSelectionReducer from '../features/risksSelection/riskSelectionSlice';

export const store = configureStore({
  reducer: {
   riskSelection: riskSelectionReducer,
  },
});
