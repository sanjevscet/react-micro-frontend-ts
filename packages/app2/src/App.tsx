import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import getList from './pokemonList';
import PokemonListView from './PokemonListView';
import Greet from '@san/shared/dist/Components/Greet';

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
    <App />
    <Greet name="Hello Dear"/>
  </React.StrictMode>
);


export {App}