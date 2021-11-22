import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import { selectRecomendation } from '../recomendationsSlice';



export default function TableResults(props) {
  // const { results } = props;
  const results = useSelector(selectRecomendation);
 return (
  <Table striped bordered hover>
    <thead>
      <tr>
      <th></th>
      <th>Bounds </th>
      <th>Large Cap </th>
      <th>Mid Cap </th>
      <th>Foreign </th>
      <th>Small Cap </th>
      </tr>
    </thead>
    <tbody>
    <tr>
    <td ><b>Differences</b></td>
      {Object.keys(results).map((key, index) => {
        console.log('results => ', results);
        return (
            <td key={index} >{results[key].difference> 0 ? `+${results[key].difference}`: results[key].difference}</td>
        )
      })}
     </tr>
     <tr>
     <td><b>New Amounts</b></td>
     {
       Object.keys(results).map((key, index) => {
       return (
           <td key={index} >{results[key].newAmount}</td>
       )
     })
    }
    </tr>
    </tbody>
  </Table>)
}