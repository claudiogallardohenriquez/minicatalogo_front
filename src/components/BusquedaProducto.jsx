import React, { useContext, useEffect } from 'react';
import Header from './layout/Header';
import { useParams } from 'react-router-dom';
import ProductoResultado from './ProductoResultado';
import esPalindromo from '../validaciones/validaPalindromo';

import productoContext from '../context/productos/productoContext';

const BusquedaProducto = () => {

    let { busqueda } = useParams();
    
    const productosContext = useContext(productoContext);
    const { 
        productos, 
        obtenerProductos,
    } = productosContext;

    useEffect(() => {
        obtenerProductos();
    // eslint-disable-next-line 
    },[]);
    
    busqueda = busqueda.toLowerCase().trim();
    let listaProductosFiltrados = productos.filter( (itemProducto) => 
            itemProducto.nombre_producto.toLowerCase().includes( busqueda ) || 
            itemProducto.descripcion_producto.toLowerCase().includes( busqueda ) || 
            itemProducto.marca.toLowerCase().includes( busqueda )
    );


    listaProductosFiltrados.forEach((item) => {
        if( esPalindromo(item.nombre_producto) || esPalindromo(item.descripcion_producto) || esPalindromo(item.marca) ){
            item.es_palindromo = true;
        }
    });

    return (  
        <>
            <Header titulo="Minicatalogo de productos" /> 
            <main className="container">
                <div className="col-sm-12 mt-3">
                    <h3>Resultado de la búsqueda: { busqueda }</h3>
                </div>
                <div className="col-sm-12">
                    <div className="row row-cols-1 row-cols-md-4 g-4 mt-2">
                        { listaProductosFiltrados.map( ( producto ) => (
                            <ProductoResultado 
                                key={producto._id}
                                producto={producto} 
                            />
                        ))}
                    </div>
                </div>
            </main> 
        </>
    );
}
 
export default BusquedaProducto;
