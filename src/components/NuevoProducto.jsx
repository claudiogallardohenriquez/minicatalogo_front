import React from 'react';
import { Button } from 'react-bootstrap';
import ModalProducto from './ModalProducto'

const NuevoProducto = ({ 
        agregarProducto, 
        productoSeleccionado, 
        actualizarProducto, 
        handleShow, 
        show, 
        handleClose, 
        limpiarProductoActual }) => {

    return ( 
        <>
            <div className="col-12">
                <div className="row">
                    <Button 
                        className="btn btn-info" 
                        variant="primary" 
                        onClick={handleShow}>
                        Agregar Nuevo Producto
                    </Button>
                </div>
            </div>
            <ModalProducto 
                agregarProducto={agregarProducto} 
                show={show} 
                handleClose={handleClose}
                productoSeleccionado={productoSeleccionado}
                actualizarProducto={actualizarProducto}
                limpiarProductoActual={limpiarProductoActual}
            />
        </>
     );
}
 
export default NuevoProducto;