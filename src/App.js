import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import ProductItem from './components/productItems';
import notFound from './components/notFound';


import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={ProductItem}/>
        <Route path="*" component={notFound} />
      </Switch>
    </div>
  );
}

export default App;
