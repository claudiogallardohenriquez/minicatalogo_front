    import React, {useState, useEffect} from 'react';

const useValidation = (stateInicial, validar, fn) => {
    const [valores, guardarValores] = useState(stateInicial);
    const [errores, guardarErrores] = useState({});
    const [submitForm, guardarSubmitForm] = useState(false);

    useEffect(() => {
        if (submitForm) {
            const noErrores = Object.keys(errores).length === 0;

            if (noErrores) {
                fn();
            }
            guardarSubmitForm(false);
        }
    }, [errores]);

    const handleChange = (e) => {
        guardarValores({
            ...valores,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
        guardarSubmitForm(true);
    };

    const handleblur = () => {
        const erroresValidacion = validar(valores);
        guardarErrores(erroresValidacion);
        guardarSubmitForm(true);
    };

    return {
        valores,
        errores,
        handleSubmit,
        handleChange,
        handleblur,
    };
}
 
export default useValidation;