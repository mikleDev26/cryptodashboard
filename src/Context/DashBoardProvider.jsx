import React, { useState, createContext, useEffect } from 'react';
import cc from 'cryptocompare';

export const DashBoardContext = createContext();

export default function DashBoardProvider(props) {


  function savedSettigns() {
    const crypoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!crypoDashData) {
      return { page: 'dashboard', firstVisit: true };
    }
    return {};
  }

  const [state, setState] = useState({ ...savedSettigns() });

  const setPage = (page) => setState({ ...state, page });

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
    const coinList = (await cc.coinList()).Data;
    console.log(coinList);
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
        firstVisit: state.firstVisit,
      }}
    >
      {props.children}
    </DashBoardContext.Provider>
  );
}
