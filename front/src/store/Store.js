import { createContext } from 'react';
import { initialState } from './initialState';


export const Store = createContext(initialState);
// Context nos permite pasar un valor a lo profundo del árbol de componentes
// sin pasarlo explícitamente a través de cada componente.