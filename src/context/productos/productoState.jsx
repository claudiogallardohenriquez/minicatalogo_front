import React, { useReducer } from 'react';
import clienteAxios from '../../config/axios';
import productoContext from './productoContext';
import productoReducer from './productoReducer';

import {
    OBTENER_PRODUCTOS,
    AGREGAR_PRODUCTO,
    ACTUALIZAR_PRODUCTO,
    PRODUCTO_ACTUAL,
    LIMPIAR_PRODUCTO_ACTUAL,
    ELIMINAR_PRODUCTO,
    PRODUCTO_ERROR,
} from '../../types';

const ProductoState = (props) => {
    
    const initialState = {
        productos: [],
        formulario: false,
        errorFormulario: false,
        producto: null,
        mensaje: null,
        productoSeleccionado: null
    };

    const [state, dispatch] = useReducer(productoReducer, initialState);

    const obtenerProductos = async () => { 
        try{
            const response = await clienteAxios.get('/api/productos');
            dispatch({
                type: OBTENER_PRODUCTOS,
                payload: response.data.productos
            });


        }catch(error){
            dispatch({
                type: PRODUCTO_ERROR,
                payload: ''
            })
        }
    };

    const agregarProducto = async (producto) => {
        try {
            const resultado = await clienteAxios.post(
                '/api/productos',
                producto
            );

            dispatch({
                type: AGREGAR_PRODUCTO,
                payload: resultado.data,
            });
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error',
            };
            dispatch({
                type: PRODUCTO_ERROR,
                payload: alerta,
            });
        }
    };

    const actualizarProducto = async (producto) => {
        try {
            const resultado = await clienteAxios.put(
                `api/productos/${producto._id}`,
                producto
            );
            dispatch({
                type: ACTUALIZAR_PRODUCTO,
                payload: resultado.data.producto,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const eliminarProducto = async (productoId) => {
        try {
            await clienteAxios.delete(`/api/productos/${productoId}`);

            dispatch({
                type: ELIMINAR_PRODUCTO,
                payload: productoId,
            });
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error',
            };
            dispatch({
                type: PRODUCTO_ERROR,
                payload: alerta,
            });
        }
    };

    const guardarProductoActual = ( producto ) => {
        dispatch({
            type: PRODUCTO_ACTUAL,
            payload: producto,
        });
    };

    const limpiarProductoActual = () => {
        dispatch({
            type: LIMPIAR_PRODUCTO_ACTUAL,
        });
    };

    return (
        <productoContext.Provider
            value={{
                productos: state.productos,
                productoSeleccionado: state.productoSeleccionado,
                productoBusqueda: state.productoBusqueda,
                obtenerProductos,
                agregarProducto,
                guardarProductoActual,
                limpiarProductoActual,
                actualizarProducto,
                eliminarProducto
            }}
        >
            {props.children}
        </productoContext.Provider>
    );
};

export default ProductoState;
