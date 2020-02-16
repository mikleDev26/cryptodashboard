import React, { useState, createContext, useEffect } from "react";

export const DashBoardContext = createContext();

export default function DashBoardProvider(props) {
  const [state, setState] = useState({ ...savedSettigns() });

  const setPage = page => setState({ ...state, page: page });

  useEffect(() => {
    savedSettigns();
  }, []);

  function savedSettigns() {
    let crypoDashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!crypoDashData) {
      return { page: "settings", firstVisit: true };
    }
    return {};
  }

  function confirmFavorites() {
    setState({
      page: "dashboard",
      firstVisit: false
    });
    localStorage.setItem(
      "cryptoDash",
      JSON.stringify({
        test: "hello"
      })
    );
  }

  return (
    <DashBoardContext.Provider
      value={{
        page: state.page,
        setPage,
        confirmFavorites,
        firstVisit: state.firstVisit
      }}
    >
      {props.children}
    </DashBoardContext.Provider>
  );
}
