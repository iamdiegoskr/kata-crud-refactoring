import React, { useRef, useState } from 'react';
import Form from './components/Form';
import {List} from './components/List'
import { StoreProvider } from './store/StoreProvider';

export const HOST_API = "http://localhost:8080/api";

function App() {
  return <StoreProvider>
    <h3>To-Do List</h3>
    <Form />
    <List />
  </StoreProvider>
}

export default App;
