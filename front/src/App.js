import React, { useRef, useState } from 'react';
import Form from './components/Form';
import {List} from './components/List'
import './styles/App.css'
import { StoreProvider } from './store/StoreProvider';
import HeaderApp from './components/Header';
import FormCategoryTask from './components/FormCategoryTask';
import ListTask from './components/ListTask';


export const HOST_API = "http://localhost:8080/api";

function App() {
  return <StoreProvider>
    <HeaderApp/>
    <div className="container">
      <h3>To-Do List</h3>
      <FormCategoryTask/>
      <ListTask/>
      {/* <Form /> */}
      {/* <List /> */}
    </div>
  </StoreProvider>
}

export default App;
