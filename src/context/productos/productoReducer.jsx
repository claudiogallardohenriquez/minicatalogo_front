import {
    FORMULARIO_PRODUCTO,
    OBTENER_PRODUCTOS,
    AGREGAR_PRODUCTO,
    VALIDAR_PRODUCTO,
    PRODUCTO_ACTUAL,
    ELIMINAR_PRODUCTO,
    PRODUCTO_ERROR,
    ACTUALIZAR_PRODUCTO,
    LIMPIAR_PRODUCTO_ACTUAL,
} from '../../types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {

    switch(action.type){
        case FORMULARIO_PRODUCTO:
            return {
                ...state,
                formulario: true
            };
        case OBTENER_PRODUCTOS:
            return {
                ...state,
                productos: action.payload,
                productoBusqueda: null
            };
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                productos: [...state.productos, action.payload],
                formulario: false,
                errorformulario: false,
            };
        case VALIDAR_PRODUCTO:
            return {
                ...state,
                errorformulario: true,
            };
        case PRODUCTO_ACTUAL:
            return {
                ...state,
                productoSeleccionado: action.payload,
            };
        case LIMPIAR_PRODUCTO_ACTUAL:
            return {
                ...state,
                productoSeleccionado: null,
            };
        case ACTUALIZAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.map((producto) =>
                    producto._id === action.payload._id ? action.payload : producto
                ),
            };
        case ELIMINAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.filter(
                    (producto) => producto._id !== action.payload
                ),
                producto: null,
            };
        case PRODUCTO_ERROR:
            return {
                ...state,
                mensaje: action.payload,
            };
        default:
            return state;
    }

};