import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { AppProvider } from './helpers/appContext';
import Cabecera from './components/Cabecera';
import Pie from './components/Pie';
import Principal from './components/Principal';
import ProductoDetalle from './components/ProductoDetalle';
import Login from './components/Login';
import Carrito from './components/Carrito';
import NoEncontrado from './components/Noencontrado'

class App extends Component {

  setCarrito = (carrito)=>{
    this.setState({ carrito });
  };
  state = {
    carrito: [
      {"id":101,"nombre":"demo1","precio":1.4,"cantidad":2},
      {"id":102,"nombre":"demo2","precio":4.9,"cantidad":4},
      {"id":103,"nombre":"demo3","precio":2.5,"cantidad":2}
    ],
    setCarrito: this.setCarrito
  };

  render(){
    return(
      <AppProvider value={this.state}>
      <div>
        <header>
          <Cabecera></Cabecera>
        </header>
        <main>
          <Switch>
            <Route exact path='/' component={ Principal } />
            <Route exact path='/producto/detalle/:id' component={ProductoDetalle}/>
            <Route exact path='/login' component={ Login } />
            <Route exact path='/carrito' component={ Carrito } />
            <Route component={ NoEncontrado } />
          </Switch>
        </main>
        <footer>
          <Pie></Pie>
        </footer>
      </div>
      </AppProvider>
    );
  }
}

export default App;