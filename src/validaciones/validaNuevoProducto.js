export default function validarNuevoProducto(valores) {
    let errores = {};
    
    if (!valores.nombre_producto) {
        errores.nombre_producto = 'El nombre del producto es obligatorio';
    }

    if (!valores.descripcion_producto) {
        errores.descripcion_producto = 'La descripcion del producto es obligatoria';
    }

    if (!valores.descripcion_producto_detalle) {
        errores.descripcion_producto_detalle = 'La descripcion de detalle del producto es obligatoria';
    }

    if (!valores.imagen) {
        errores.imagen = 'La imagen del producto es obligatoria';
    }

    if (!valores.precio) {
        errores.precio = 'La imagen del producto es obligatoria';
    }

    if (!valores.marca) {
        errores.marca = 'La marca del producto es obligatoria';
    }

    if (!valores.codigo) {
        errores.codigo = 'El codigo del producto es obligatoria';
    }

    if (!valores.stock) {
        errores.stock = 'El codigo del producto es obligatoria';
    }

    return errores;
}