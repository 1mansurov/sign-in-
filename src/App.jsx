import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ProductList from './components/ProductList';
import SignIn from './components/SignIn';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SignIn />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
