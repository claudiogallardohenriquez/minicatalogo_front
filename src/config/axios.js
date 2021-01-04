import axios from 'axios';
require('dotenv').config({ path: '../../variables.env' });

const clienteAxios = axios.create({
    baseURL: 'http://localhost:4000'
});

export default clienteAxios;