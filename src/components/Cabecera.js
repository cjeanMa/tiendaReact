
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../helpers/appContext';

class Cabecera extends Component {
  static contextType = AppContext;
  render(){
    return(
      <div id="cabecera">
        <div className="logo"><Link to="/">JMStore</Link></div>
        <div className="buscador"><input type="text" placeholder="Busca un producto" /><button>Buscar</button></div>
        <div className="enlaces">
          <Link to="/login">Iniciar Sesión</Link> 
          <Link to="/carrito">Carrito ({this.context.carrito.length})</Link>
        </div>
      </div>
    );
  }
}
export default Cabecera;