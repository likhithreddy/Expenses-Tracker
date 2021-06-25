import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <nav><b>EXPENSES TRACKER</b></nav>
      <ExpenseItem reason="GRE" amount="$250"/>
      <ExpenseItem reason="Unwanted" amount="$100"/>
    </div>
  );
}

export default App;
