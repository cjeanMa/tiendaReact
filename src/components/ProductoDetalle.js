import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../helpers/appContext';

class ProductoDetalle extends Component {
    static contextType = AppContext;
    idprod = this.props.match.params.id;
    state = {
        datoProducto: [],
        cantidad: 1
    }

    componentDidMount() {
        let ruta = "http://localhost:3000/productos/" + this.idprod;
        fetch(ruta)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    datoProducto: data
                })
            })
    }

    setCantidad(e) {
        this.setState({
            cantidad: e.target.value
        });
    }

    agregarProducto() {
        let producto = {
            id: this.props.match.params.id,
            nombre: this.state.datoProducto.nombre,
            precio: this.state.datoProducto.precio,
            cantidad: parseInt(this.state.cantidad)
        }
        let newCarrito = this.context.carrito;
        newCarrito.push(producto);
        console.log(newCarrito);
        this.context.setCarrito(newCarrito);
        window.alert("Producto agregado!");
    }

    render() {
        console.log(this.state.datoProducto)
        return (
            <div id="productoDetalle">
                <div className="ruta">
                    <Link to="/">Inicio</Link> / Producto / {this.state.nombre}
                </div>
                <div className="cajaProducto">
                    <div className="imagen"><img src={"assets/img/" + this.state.datoProducto.imagen} alt="" /></div>
                    <div className="datos">
                        <h2>{this.state.datoProducto.nombre}</h2>
                        <div className="precio">{parseFloat(this.state.datoProducto.precio).toFixed(2)}</div>
                        <div className="controles">
                            <input type="number" className="cajaCantidad" onChange={this.setCantidad.bind(this)} value={this.state.cantidad} min="1" />
                            <button className="btnCarrito" onClick={this.agregarProducto.bind(this)}>Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductoDetalle;