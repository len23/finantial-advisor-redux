import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSelectedLevel } from "../risksSelection/riskSelectionSlice";
import {
  setinInitialValues,
  setCurrentValue,
  selectCurrentValues,
  selectRecomendation,
  setNewValues,
} from "./recomendationsSlice";
import RiskSelected from "./riskSelected/RiskSelected";
import CurrentPortfolio from "./currentPortfolio/CurrentPortfolio";
import TableResults from "./tableResults/TableResults";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Recomendations() {
  const dispatch = useDispatch();
  const selectedRisk = useSelector(selectSelectedLevel);
  const portfolioValues = useSelector(selectRecomendation);
  const onFirstRender = () => {
    dispatch(setinInitialValues());
  };

  useEffect(onFirstRender, []);

  const currentValues = useSelector(selectCurrentValues);

  const handleChange = (name, { target }) => {
    dispatch(setCurrentValue({ key: name, value: target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      makeCalculations();
    }
  };

  const makeCalculations = () => {
    const total = Object.values(currentValues).reduce(
      (pv, cv) => parseInt(pv) + parseInt(cv)
    );
    let portTemp = { ...portfolioValues };
    for (const key in portfolioValues) {
      let newAmount = ((total * selectedRisk[key]) / 100).toFixed(2);
      let difference = (
        newAmount - parseInt(portfolioValues[key].current)
      ).toFixed(2);
      portTemp[key] = {
        ...portTemp[key],
        difference: difference,
        newAmount: newAmount,
      };
    }
    dispatch(setNewValues(portTemp));
  };

  return (
    <div>
      <h2 className="fs-3">Please Enter Your Current Portfolio</h2>
      <RiskSelected selectedRisk={selectedRisk} />
      <Row>
        <Col lg={5}>
          <CurrentPortfolio
            onSubmit={handleSubmit}
            onChange={handleChange}
            labels={currentValues}
          />
        </Col>
        <Col lg={7}>
          <TableResults />
        </Col>
      </Row>
    </div>
  );
}
