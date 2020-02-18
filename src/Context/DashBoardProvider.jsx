import React, { useState, createContext, useEffect } from 'react';
import cc from 'cryptocompare';
import _ from 'lodash';

export const DashBoardContext = createContext();

export default function DashBoardProvider(props) {
  const [coinList, setCoinList] = useState(null);
  const [favorites, setFavorites] = useState(['BTC', 'ETH', 'XMR', 'DOGE']);

  const MAX_FAVORITES = 10;

  function savedSettigns() {
    const crypoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!crypoDashData) {
      return { page: 'dashboard', firstVisit: true };
    }
    return {};
  }

  const [state, setState] = useState({ ...savedSettigns() });

  const setPage = (page) => setState({ ...state, page });

  function addCoin(key) {
    const favoriteCoinsList = [...favorites];
    if (favoriteCoinsList.length < MAX_FAVORITES) {
      favoriteCoinsList.push(key);
      setFavorites(favoriteCoinsList);
    }
  }

  function removeCoin(key) {
    const favoriteCoinsList = [...favorites];
    setFavorites(_.pull(favoriteCoinsList, key));
  }

  function confirmFavorites() {
    setState({
      page: 'dashboard',
      firstVisit: false,
    });
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        test: 'hello',
      }),
    );
  }

  async function fetchCoins() {
    const listOfCoins = (await cc.coinList()).Data;
    setCoinList(listOfCoins);
  }

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <DashBoardContext.Provider
      value={{
        page: state.page,
        setPage,
        confirmFavorites,
        coinList,
        favorites,
        firstVisit: state.firstVisit,
        addCoin,
        removeCoin,
      }}
    >
      {props.children}
    </DashBoardContext.Provider>
  );
}
