import React, {useState, useEffect} from 'react';
import { Modal } from 'react-bootstrap';
import validaNuevoProducto from '../validaciones/validaNuevoProducto';

const stateInicial = {
    nombre_producto: '',
    descripcion_producto: '',
    descripcion_producto_detalle: '',
    imagen: '',
    precio: '',
    marca: '',
    codigo: '',
    stock: ''
};

const ModalProducto = ({ 
    agregarProducto, 
    show, 
    handleClose, 
    productoSeleccionado, 
    actualizarProducto, 
    limpiarProductoActual 
}) => {

    const [ valores, guardarValores ] = useState(stateInicial);

    useEffect(() => {
        
        if(productoSeleccionado !== null){
            guardarValores(productoSeleccionado);
        }

    }, [productoSeleccionado]);

    const { 
        nombre_producto, 
        descripcion_producto, 
        descripcion_producto_detalle, 
        imagen, 
        precio, 
        marca, 
        codigo, 
        stock } = valores;

    const onChangeProducto = (e) => {
        guardarValores({
            ...valores,
            [e.target.name]: e.target.value,
        });
    };

    const onClickCloseModal = () => {
        limpiarCamposModal();
        limpiarProductoActual();
        handleClose();
    };

    const onSubmitProducto = (e) => {
        e.preventDefault();
        const erroresValidacion = validaNuevoProducto(valores);
        const noErrores = Object.keys(erroresValidacion).length === 0;

        if (noErrores) {
            handleClose();
            
            if(productoSeleccionado === null){
                agregarProducto(valores);
            }else{
                actualizarProducto(valores);
                limpiarProductoActual();
            }
        }

        limpiarCamposModal();
    };

    const limpiarCamposModal = () => {
        guardarValores({
            nombre_producto: '',
            descripcion_producto: '',
            descripcion_producto_detalle: '',
            imagen: '',
            precio: '',
            marca: '',
            codigo: '',
            stock: ''
        });
    };
  
    return ( 
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header>
                    <Modal.Title>
                        { productoSeleccionado ? `Editar producto ${productoSeleccionado.nombre_producto}` : 'Agregar producto' }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onSubmitProducto}>
                        <div className="modal-body">  
                            <div className="mb-3">
                                <label htmlFor="nombre_producto" className="form-label">Nombre producto</label>
                                <input 
                                    type="text" 
                                    name="nombre_producto"
                                    value={nombre_producto}
                                    onChange={onChangeProducto}
                                    className="form-control" 
                                    id="nombre_producto" 
                                    placeholder="EJ: Zapatilla, Polera, Televisor" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="descripcion_producto" className="form-label">Descripción producto</label>
                                <textarea 
                                    name="descripcion_producto"
                                    value={descripcion_producto}
                                    onChange={onChangeProducto}
                                    className="form-control" 
                                    id="descripcion_producto" 
                                    rows="3" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="descripcion_producto_detalle" className="form-label">Descripción producto detalle</label>
                                <textarea 
                                    name="descripcion_producto_detalle"
                                    value={descripcion_producto_detalle}
                                    onChange={onChangeProducto}
                                    className="form-control" 
                                    id="descripcion_producto_detalle" 
                                    rows="3" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="imagenProductoInput" className="form-label">Imagen producto</label>
                                <input 
                                    name="imagen"
                                    type="text" 
                                    value={imagen}
                                    onChange={onChangeProducto}
                                    className="form-control" 
                                    id="imagenProductoInput" 
                                    placeholder="EJ: Link de la imagen" />
                                    
                                    {imagen ? (
                                        <div className="col">
                                            <img src={imagen} className="card-img-top" alt="Imagen de producto"/>
                                        </div>
                                        ) : null
                                    }
                                      
                            </div>
                            <div className="mb-3">
                                <label htmlFor="precioProductoInput" className="form-label">Precio producto</label>
                                <input 
                                    name="precio"
                                    type="text" 
                                    value={precio}
                                    onChange={onChangeProducto}
                                    className="form-control" 
                                    id="precioProductoInput" 
                                    placeholder="EJ: 10000" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="marcaProductoInput" className="form-label">Marca producto</label>
                                <input 
                                    name="marca"
                                    type="text" 
                                    value={marca}
                                    onChange={onChangeProducto}
                                    className="form-control" 
                                    id="marcaProductoInput" 
                                    placeholder="EJ: Adidas" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="codigoProductoInput" className="form-label">Código producto</label>
                                <input 
                                    name="codigo"
                                    type="text" 
                                    value={codigo}
                                    onChange={onChangeProducto}
                                    className="form-control" 
                                    id="codigoProductoInput" 
                                    placeholder="EJ: COD1234567" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="stockProductoInput" className="form-label">Stock producto</label>
                                <input 
                                    name="stock"
                                    type="text" 
                                    value={stock}
                                    onChange={onChangeProducto}
                                    className="form-control" 
                                    id="stockProductoInput" 
                                    placeholder="EJ: 100" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button 
                                onClick={onClickCloseModal} 
                                type="button" 
                                className="btn btn-info">Cerrar
                            </button>
                            <button 
                                type="submit" 
                                className="btn btn-primary">Guardar 
                            </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
     );
}
 
export default ModalProducto;