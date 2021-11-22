import Table from "react-bootstrap/Table";

export default function RiskSelected(props) {
  const { selectedRisk } = props;
  return (
    <div>
      <h1>Ris Level {selectedRisk.risk}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Bounds %</th>
            <th>Large Cap %</th>
            <th>Mid Cap %</th>
            <th>Foreign %</th>
            <th>Small Cap %</th>
          </tr>
        </thead>
        <tbody>
          {
            <tr>
              <td>{selectedRisk.bonds}%</td>
              <td>{selectedRisk.largeCap}%</td>
              <td>{selectedRisk.MidCap}%</td>
              <td>{selectedRisk.Foreign}%</td>
              <td>{selectedRisk.SmallCap}%</td>
            </tr>
          }
        </tbody>
      </Table>
    </div>
  );
}
