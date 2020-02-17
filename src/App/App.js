import React from 'react';
import './App.css';
import DashBordProvider from '../Context/DashBoardProvider';
// import styled, { css } from "styled-components";
import AppLayout from './AppLayout';
import AppBar from '../components/AppBar/AppBar';
import SettingsPage from '../Pages/SettingsPage/SettingsPage';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <AppLayout>
      <DashBordProvider>
        <AppBar />
        <div className="App">
          <SettingsPage />
        </div>
      </DashBordProvider>
    </AppLayout>
  );
}

export default App;
