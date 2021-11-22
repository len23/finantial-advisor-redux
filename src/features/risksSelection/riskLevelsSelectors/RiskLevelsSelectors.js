import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedRisk,
  setRiskData,
  selectSelectedLevel,
} from "../riskSelectionSlice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import "./RiskLevelsSelectors.css";

export default function RiskLevelsSelectors(props) {
  const dispatch = useDispatch();
  const { riskLevels, onContinue } = props;

  return (
    <div>
      <p className="text-center fs-3">
        <b>Please Select A Risk Level For Your Investment Portfolio</b>
      </p>
      <Row className="w-75 mx-auto">
        <Col>LOW</Col>
        <Col className="text-end">HIGH</Col>
      </Row>
      <Stack
        className="stack-position justify-content-between w-75 mx-auto flex-wrap"
        direction="horizontal"
      >
        {riskLevels.map((risk, index) => {
          return (
            <button
              className={
                (risk.selected ? `bg-warning` : `bg-light`) +
                ` border p-4 mb-4 `
              }
              key={index}
              onClick={() => {
                dispatch(setRiskData());
                dispatch(setSelectedRisk({ risk: risk.riskLevel }));
              }}
            >
              {index + 1}
            </button>
          );
        })}
        <button
          className="continue-button bg-light border p-4 mb-4"
          disabled={!useSelector(selectSelectedLevel)}
          onClick={onContinue}
        >
          Continue
        </button>
      </Stack>
    </div>
  );
}
