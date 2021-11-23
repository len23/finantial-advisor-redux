import { selectRecomendation } from '../recomendationsSlice';
import { useSelector } from 'react-redux';

const LABELS = {
  bonds: "Bounds",
  largeCap: "Large Cap",
  MidCap: "Mid Cap",
  Foreign: "Foreign",
  SmallCap: "Small Cap",
};

export default function Transactions() {
  const recomendations = useSelector(selectRecomendation);
  const listComponent = [];

  const roundToTwo = (num) => {
    return +(Math.round(num + "e+2") + "e-2");
  }

  const transactionsHelper = () => {
    let newArray = Object.entries(recomendations).sort((a, b) => b[1].difference - a[1].difference);
    let positives = newArray.filter(na => na[1].difference > 0).map(d => [d[0], roundToTwo(d[1].difference)]);
    let negatives = newArray.filter(na => na[1].difference < 0).map(d => [d[0], roundToTwo(d[1].difference)]);

    for (let i = 0; i < positives.length; i++) {
      for (let j = negatives.length - 1; j >= 0; j--) {
        if ((negatives[j][1] !== 0 && positives[i][1] !== 0)) {
          if ((positives[i][1] + negatives[j][1]) === 0) {
            listComponent.push(<p>Transfer ${Math.abs(negatives[j][1]).toFixed(2)} from {LABELS[negatives[j][0]]} to {LABELS[positives[i][0]]}</p>);
            negatives[j][1] = 0;
            positives[i][1] = 0;
          } else if ((positives[i][1] + negatives[j][1]) > 0) {
            listComponent.push(<p>Transfer ${Math.abs(negatives[j][1].toFixed(2))} from {LABELS[negatives[j][0]]} to {LABELS[positives[i][0]]}</p>);
            positives[i][1] += roundToTwo(negatives[j][1]);
            negatives[j][1] = 0;
          } else if ((positives[i][1] + negatives[j][1]) < 0) {
            listComponent.push(<p>Transfer ${Math.abs(positives[i][1]).toFixed(2)} from {LABELS[negatives[j][0]]} to {LABELS[positives[i][0]]}</p>);
            negatives[j][1] += roundToTwo(positives[i][1]);
            positives[i][1] = 0;
          }
        }
      }
    }
  }

  transactionsHelper();

  return (
    <div>
      <h3>Suggested Transactions</h3>
      <ul className="list-group-flush bg-primary">
        {listComponent && listComponent.map((p, i) => <li key={i} className="list-group-item">{p}</li>)}
      </ul>
    </div>
  )
}