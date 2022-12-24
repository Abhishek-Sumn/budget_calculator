import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider className="App">

      <Header />

      <div className="conatiner">
        <Balance />

        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>

    </GlobalProvider>
  );
}

export default App;
