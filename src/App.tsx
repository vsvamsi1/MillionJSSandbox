import React, { ChangeEvent, useEffect, useState } from 'react';
import { fetchCoins } from './ajax/CoinsApi';
import './App.css';
import CoinTable from './components/CoinTable/CoinTable';
import CurrencySelector from './components/CurrencySelector/CurrencySelector';
import { COINS_TO_FETCH, CURRENCIES } from './config/Constants';
import Coin from './model/Coin';

function App() {
  const [currency, setCurrency] = useState("USD");
  const [coins, setCoins] = useState<Array<Coin>>([]);
  const [inputValue, setInputValue] = useState("test");
  useEffect(() => {
    fetchCoins(currency, COINS_TO_FETCH).then(res => {
      setCoins(res);
    })
  }, [currency]);

  // This should be memoised so that changes input values do not trigger a re-render for coin table
  const updatedCoints = coins.map((coin) => ({
      ...coin,
      currentPrice: coin.currentPrice +10,
  }) as Coin);
  return (
    <div className="App">
      <input type="text"  onInput={(e => {
        setInputValue(e.currentTarget.value);
      })} value={inputValue} />
      <span className="app-title">Crypto Coins</span>
      <CurrencySelector currencies={CURRENCIES} current={currency} onChange={(e: ChangeEvent<HTMLSelectElement>): void => setCurrency(e.target.value)} />
      <CoinTable currency={currency} coins={updatedCoints} />
    </div>
  );
}

export default App;
