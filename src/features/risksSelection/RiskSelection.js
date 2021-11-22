import { useSelector } from 'react-redux';
import { selectRiskSelection, selectLevelsRisks, selectSelectedLevelValues } from './riskSelectionSlice';
import { useState } from 'react';
import SwitchButtton from './switchButton/SwitchButton';
import RiskLevelsSelectors from './riskLevelsSelectors/RiskLevelsSelectors';
import TableLevels from './tableLevels/TableLevels';
import DoughnutChart from './doughnutChart/DoughnutChart';

import list from '../../assets/list.svg';
import pie from '../../assets/pie-chart.svg'

export default function RiskSelection() {

 const risksDataDetails = useSelector(selectRiskSelection);
 const riskLevels = useSelector(selectLevelsRisks);
 let riskSelectedDetails = useSelector(selectSelectedLevelValues);

 const [showGraphic, setShowGraphic] = useState({ show: false, srcImg: pie });
 const handleDataDisplay = () => {
  setShowGraphic({ show: !showGraphic.show, srcImg: showGraphic.show ? pie : list });
}

 
 return(
  <div>
  <SwitchButtton handleDataDisplay={handleDataDisplay} src={showGraphic.srcImg} />
   <RiskLevelsSelectors riskLevels={riskLevels}/>
    {!showGraphic.show &&
   <TableLevels
    risksDataDetails={risksDataDetails}
    />
    }
    {showGraphic.show && <DoughnutChart 
      riskSelectedDetails={riskSelectedDetails}
    />}
   </div>
 )
}