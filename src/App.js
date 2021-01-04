import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BusquedaProducto from './components/BusquedaProducto';
import Productos from './components/Productos';

import ProductoState from './context/productos/productoState';

function App() {
  return (
    <ProductoState>
        <Router>
          <Switch>
            <Route exact path="/" component={ Productos } />
            <Route exact path="/busqueda/:busqueda" component={ BusquedaProducto } />
          </Switch>
        </Router>
    </ProductoState>
  );
}

export default App;
