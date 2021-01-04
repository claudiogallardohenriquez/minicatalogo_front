import React from 'react';

const ProductoResultado = ({ producto }) => {

    const { nombre_producto, descripcion_producto, imagen, precio, es_palindromo } = producto;

    return (  
        <div className="col">
            <div className="card">
                <img src={imagen} className="card-img-top" alt={descripcion_producto} />
                <div className="card-body">
                    <h5 className="card-title">{nombre_producto}</h5>
                    <p className="card-text">{descripcion_producto}</p>
                    <div className="row">
                        <div className="col-12">
                            <div className="row text-end">
                                <p className="card-text text-center lh-lg">
                                    $ {es_palindromo ? precio - (precio * 0.20) : precio}
                                </p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ProductoResultado;