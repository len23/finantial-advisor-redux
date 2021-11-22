import { configureStore } from '@reduxjs/toolkit';
import riskSelectionReducer from '../features/risksSelection/riskSelectionSlice';
import recomendationsReducer from '../features/recomendations/recomendationsSlice';

export const store = configureStore({
  reducer: {
   riskSelection: riskSelectionReducer,
   recomendations: recomendationsReducer
  },
});
