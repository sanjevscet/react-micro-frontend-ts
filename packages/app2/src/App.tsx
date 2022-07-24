import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import getList from './pokemonList';
import PokemonListView from './PokemonListView';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = () => (
  <div>
    <h1>APP-2</h1>
    <PokemonListView list={getList("Bulb")} />
  </div>
);


root.render(
  <React.StrictMode>
    <App />l
  </React.StrictMode>
);


export {App}