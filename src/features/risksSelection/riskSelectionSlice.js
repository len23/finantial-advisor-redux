import { createSlice } from '@reduxjs/toolkit';
import { dataRisk } from '../../assets/data-risk';

const initialState = dataRisk.map(risk => ({...risk, selected: false }));

const riskSelectionSlice = createSlice({
 name: 'riskSelection',
 initialState: initialState,
 reducers: {
  setRiskData: (state, action) => {
   state = state.map(risk => {
    return risk.selected = false;
   });
  },
  setSelectedRisk: (state, action) => {
   const foundIndex = state.findIndex(s => action.payload.risk === s.risk);
   state[foundIndex].selected = true;
  }
 }
});


export const selectRiskSelection = (state) => state.riskSelection;
export const selectLevelsRisks = (state) => state.riskSelection.map(s => ({riskLevel: s.risk, selected: s.selected}));
export const selectSelectedLevel = (state) => state.riskSelection.find(s => s.selected);
export const selectSelectedLevelValues = (state) => {
 let findSelected = state.riskSelection.find(s => s.selected);
 const valuesArr = [];
 if(findSelected) {
  for (const key in findSelected) {
   if(key !== 'risk' &&  key !== 'selected') {
    valuesArr.push(findSelected[key])
   }
  }
 }
 return valuesArr;
}
export const { setRiskData, setSelectedRisk} = riskSelectionSlice.actions;
export default riskSelectionSlice.reducer;