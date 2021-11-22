import { createSlice } from "@reduxjs/toolkit";
import { dataRisk } from "../../assets/data-risk";

const initialState = {};

const recomendationSlice = createSlice({
  name: "recomendations",
  initialState: initialState,
  reducers: {
    setinInitialValues: (state, action) => {
      for (const key in dataRisk[0]) {
        if (key !== "risk") {
          state[key] = { current: "", difference: 0, newAmount: 0 };
        }
      }
    },
    setCurrentValue: (state, action) => {
      state[action.payload.key].current = action.payload.value;
    },
    setNewValues: (state, action) => {
      Object.keys(action.payload).forEach(
        (key) => (state[key] = action.payload[key])
      );
    },
  },
});

export const selectRecomendation = (state) => state.recomendations;
export const selectCurrentValues = (state) => {
  const currentValues = {};
  for (const key in state.recomendations) {
    currentValues[key] = state.recomendations[key].current;
  }
  return currentValues;
};
export const { setinInitialValues, setCurrentValue, setNewValues } =
  recomendationSlice.actions;
export default recomendationSlice.reducer;
