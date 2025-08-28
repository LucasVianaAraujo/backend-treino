import { connection } from '../connection.js'

export async function ListarUsuarios() {
    const comando = `
    SELECT *
    FROM CADASTRO
    `

    const [registro] = await connection.query(comando)
    return registro;
}

export async function ListarUsuarioFiltro(NOME) {
    const comando = `
    SELECT *
    FROM CADASTRO
    WHERE NOME
    LIKE ?
    `

    const [registro] = await connection.query(comando, [`%${NOME}%`])
    return registro;
}

// export async function ListarUsuarioFiltroCPF(CPF) {
//     const comando = `
//     SELECT *
//     FROM CADASTRO
//     WHERE CPF
//     LIKE ?
//     `

//     const [registro] = await connection.query(comando, [`%${CPF}%`])
//     return registro;
// }

export async function AdicionarUsuario(id) {
    const comando = `
    INSERT INTO CADASTRO (NOME, ESCOLARIDADE, INTERESSE_CURSO, PREVISAO_CHEGADA, EMAIL, SABENDO_FEIRA, TELEFONE, ALUNO_FREI, CPF) 
    VALUES(?,?,?,?,?,?,?,?,?)
    `

    const [info] = await connection.query(comando, [
        id.NOME,
        id.ESCOLARIDADE,
        id.INTERESSE_CURSO,
        id.PREVISAO_CHEGADA,
        id.EMAIL,
        id.SABENDO_FEIRA,
        id.TELEFONE,
        id.ALUNO_FREI,
        id.CPF
    ])

    return info.insertId;
}

export async function AlterarUsuario(id, Changes) {
    const comando = `
    UPDATE CADASTRO
    SET NOME = ?,
    ESCOLARIDADE = ?,
    INTERESSE_CURSO = ?,
    PREVISAO_CHEGADA = ?,
    EMAIL = ?,
    SABENDO_FEIRA = ?,
    TELEFONE = ?,
    ALUNO_FREI = ?,
    CPF = ?
    WHERE ID = ?
    `

    const [info] = await connection.query(comando, [
        Changes.NOME,
        Changes.ESCOLARIDADE,
        Changes.INTERESSE_CURSO,
        Changes.PREVISAO_CHEGADA,
        Changes.EMAIL,
        Changes.SABENDO_FEIRA,
        Changes.TELEFONE,
        Changes.ALUNO_FREI,
        Changes.CPF,
        id
    ])

    return info.affectedRows;
}

export async function DeletarUsuario(id) {
    const comando = `
    DELETE FROM CADASTRO
    WHERE ID = ? 
    `

    const [info] = await connection.query(comando, [id])
    return info;
}