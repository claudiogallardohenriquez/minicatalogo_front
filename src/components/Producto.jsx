import React from 'react';

const Producto = ({ producto, guardarProductoActual, handleShow, eliminarProducto }) => {

    const { nombre_producto, descripcion_producto, imagen, precio } = producto;

    const seleccionarProducto = ( producto ) => {
        guardarProductoActual(producto);
        handleShow();
    };

    const seleccionarIdProducto = ( idProducto ) => {
        eliminarProducto( idProducto );
    };

    return (  
        <div className="col">
            <div className="card">
                <img src={imagen} className="card-img-top" alt={descripcion_producto} />
                <div className="card-body">
                    <h5 className="card-title">{nombre_producto}</h5>
                    <p className="card-text">{descripcion_producto}</p>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <p className="card-text text-center lh-lg">$ {precio}</p>
                            </div> 
                        </div>
                        <div className="col-7 text-center">
                            <button 
                                onClick={() => seleccionarProducto( producto )}
                                type="button" 
                                className="btn btn-dark btn-sm">
                                    Editar
                            </button>
                            <button 
                                onClick={() => seleccionarIdProducto( producto._id )}
                                type="button" 
                                className="btn btn-danger btn-sm ms-sm-2">
                                    Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Producto;