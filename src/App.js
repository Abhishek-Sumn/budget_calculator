import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';
//6
import './App.css';

function App() {
  return (
    <GlobalProvider className="App">
      <div class='box'>
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
      </div>
      <Header />

      <div className="conatiner ">
        <Balance />

        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>

    </GlobalProvider>
  );
}

export default App;
