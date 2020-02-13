import React, { useState, createContext } from "react";

export const DashBoardContext = createContext();

export default function DashBoardProvider(props) {
  const [page, setPage] = useState("dashboard");

  return (
    <DashBoardContext.Provider value={{ page, setPage }}>
      {props.children}
    </DashBoardContext.Provider>
  );
}
