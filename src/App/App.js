import React from "react";
import "./App.css";
// import styled, { css } from "styled-components";
import AppLayout from "./AppLayout";
import AppBar from "../components/AppBar/AppBar";

function App() {
  return (
    <AppLayout>
      <AppBar></AppBar>
      <div className="App">
        <h2>Main page</h2>
      </div>
    </AppLayout>
  );
}

export default App;
