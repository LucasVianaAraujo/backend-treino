import { ListarUsuarios } from "../../repository/User/AddUser.js";
import { AdicionarUsuario } from "../../repository/User/AddUser.js";
import { AlterarUsuario } from "../../repository/User/AddUser.js";
import { DeletarUsuario } from "../../repository/User/AddUser.js";
import { ListarUsuarioFiltro } from "../../repository/User/AddUser.js";
// import { ListarUsuarioFiltroCPF } from "../../repository/User/AddUser.js";

// patê

import { Router } from "express";

const endpoints = Router();

endpoints.get('/feira2025/users/nofilter', async (req, resp) => {
    const registro = await ListarUsuarios()
    resp.send(registro)
})

endpoints.get('/feira2025/users/filter/name', async (req, resp) => {
    let filtro = req.query.NOME;
    const registro = await ListarUsuarioFiltro(filtro)
    resp.send(registro)
})

// endpoints.get('/feira2025/users/:n1', async (req, resp) => {
//     const id = req.params.n1;
//     const registro = await ListarUsuariosID(id)
//     resp.send(registro)
// })

endpoints.post('/feira2025/users/adicionar', async (req, resp) => {
    const AddUser = req.body;
    const id = await AdicionarUsuario(AddUser)
    resp.send({ NovoID: id });
})

endpoints.put('/feira2025/user/alter/:n1', async (req, resp) => {
    const id = req.params.n1;
    const Changes = req.body;
    const registro = await AlterarUsuario(id, Changes)
    resp.send(registro);
})

endpoints.delete('/feira2025/user/delete/:n1', async (req,resp)=> {
    const id = req.params.n1;
    const registro = await DeletarUsuario(id)
    resp.send(registro);
})

export default endpoints;