import { ListarEstados } from "../../repository/Estados/Estados.js";
import { BuscarEstado } from '../../repository/Estados/Estados.js'
import { BuscarEstadoFiltro } from "../../repository/Estados/Estados.js";
import { AlterarCidade } from "../../repository/Estados/Estados.js";
import { DeletarUsuario } from "../../repository/User/AddUser.js";

import { Router } from "express";

const endpoints = Router();

endpoints.get('/states/read', async (req, resp) => {
    const registro = await ListarEstados()
    resp.send(registro);
})

endpoints.get('/states/read/:n1', async (req, resp) => {
    const id = req.params.n1;
    const registro = await BuscarEstado(id)
    resp.send(registro);
})

endpoints.get('/states/read/:cidade', async (req, resp) => {
    const NomeCidade = req.params.cidade;
    const registro = await BuscarEstadoFiltro(NomeCidade)
    resp.send(registro);
})

endpoints.post('/states/add', async (req,resp) => {
    const NovoRegistro = req.body;
    const registro = await AdicionarEstado(NovoRegistro);
    resp.send(registro);
})

endpoints.put('/states/alter/:n1', async (req,resp) => {
    const id = req.params.n1;
    const Changes = req.body;
    const registro = await AlterarCidade(id,Changes)
    resp.send(registro);
})

endpoints.delete('/states/delete/:nome', async (req,resp) => {
    const id = req.params.nome;
    const registro = await DeletarUsuario(id)
    resp.send(registro);
})

export default endpoints;