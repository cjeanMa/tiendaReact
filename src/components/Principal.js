
import React, { Component } from 'react';
import Producto from './Producto';
class Principal extends Component {
  constructor(){
    super();
    this.state = {
      lista: []
    }
  }
  componentDidMount(){
    let ruta = "http://localhost:3000/productos";
    fetch(ruta).then(response=>response.json())
    .then(datos=>{
      this.setState({
        lista : datos
      })
    });
  }
  render(){
    return(
      <div id="principal">
        <h1>Productos</h1>
        <div className="lista">
        {this.state.lista.map(prod=>{
          return(<Producto key={prod.id} dato={prod} />);
        })}
        </div>
      </div>
    );
  }
}
export default Principal;