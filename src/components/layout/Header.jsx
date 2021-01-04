import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Header = ({ titulo }) => {

    const[ busqueda, setBusqueda ] = useState('');
    let history = useHistory();

    const buscarProductos = (e) => {
        e.preventDefault();

        if(busqueda.length > 3){
            history.push(`/busqueda/${busqueda}`);
        }
        
        setBusqueda('');
    };
    
    return ( 
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">{ titulo }</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={buscarProductos}>
                            <input 
                                className="form-control me-2" 
                                type="text" 
                                placeholder="Buscar producto" 
                                aria-label="Search"
                                onChange={e => setBusqueda(e.target.value)}
                                name="nombre"
                            />
                            <button 
                                className="btn btn-primary" 
                                type="submit">
                                Buscar
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
     );
}
 
export default Header;