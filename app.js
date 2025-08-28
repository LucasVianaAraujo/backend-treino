import AddRoutes from './routes.js';

import express from 'express'

const api = express();
api.use(express.json());

AddRoutes(api)

api.listen(5001, () => console.log('Conectado ao MySQL'))