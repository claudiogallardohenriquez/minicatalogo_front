import React, { useContext, useEffect, useState } from 'react';
import Header from './layout/Header';
import NuevoProducto from './NuevoProducto';
import Producto from './Producto';

import productoContext from '../context/productos/productoContext';

const Productos = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const productosContext = useContext(productoContext);
    const { 
        productos, 
        obtenerProductos, 
        agregarProducto, 
        actualizarProducto,
        eliminarProducto,
        guardarProductoActual,
        limpiarProductoActual,
        productoSeleccionado,
    } = productosContext;

    useEffect(() => {
        obtenerProductos();
    },[]);

    return ( 
        <>
            <Header titulo="Minicatalogo de productos" /> 
            <NuevoProducto 
                agregarProducto={agregarProducto} 
                productoSeleccionado={productoSeleccionado} 
                actualizarProducto={actualizarProducto}
                show={show}
                handleClose={handleClose}
                handleShow={handleShow}
                limpiarProductoActual={limpiarProductoActual}
            />
            <main className="container">
                <div className="col-sm-12">
                    <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
                        { productos.map( (producto) => (
                            <Producto 
                                handleShow={handleShow}
                                key={producto._id} 
                                producto={producto} 
                                guardarProductoActual={guardarProductoActual}
                                eliminarProducto={eliminarProducto}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </>
     );
}
 
export default Productos;