import React from "react";
import "./App.css";
import DashBordProvider from "../Context/DashBoardProvider";
// import styled, { css } from "styled-components";
import AppLayout from "./AppLayout";
import AppBar from "../components/AppBar/AppBar";

function App() {
  return (
    <AppLayout>
      <DashBordProvider>
        <AppBar />
        <div className="App">
          <h2>Main page</h2>
        </div>
      </DashBordProvider>
    </AppLayout>
  );
}

export default App;
