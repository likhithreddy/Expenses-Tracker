import './App.css';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses=[
    {title:"Car Insurance", amount: 295.6, date: new Date(2020,3,27)},
    {title:"College Fee", amount: 2970, date: new Date(2020,7,30)},
    {title:"Earbuds", amount: 105, date: new Date(2020,4,22)},
    {title:"Phone", amount: 849, date: new Date(2020,4,22)}
  ];

  return (
    <div className="App">
      <nav><b>EXPENSES TRACKER</b></nav>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
