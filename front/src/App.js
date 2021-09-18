import React, { useRef, useState } from 'react';
import './styles/App.css'
import { StoreProvider } from './store/StoreProvider';
import HeaderApp from './components/Header';
import FormView from './components/List/FormView';
import ListView from './components/List/ListView';


export const HOST_API = "http://localhost:8080/api";

function App() {
  return <StoreProvider>
    <HeaderApp/>
    <div className="container">
      <FormView/>
      <ListView/>
    </div>
  </StoreProvider>
}

export default App;
