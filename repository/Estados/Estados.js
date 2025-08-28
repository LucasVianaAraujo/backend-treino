import { connection } from "../connection.js";

export async function ListarEstados() {
    const comando = `
    SELECT *
    FROM ESTADOS
    `

    const [registro] = await connection.query(comando)
    return registro;
}

export async function BuscarEstado(id) {
    const comando = `
    SELECT *
    FROM ESTADOS
    WHERE ID_NM = ?
    `

    const [registro] = await connection.query(comando, [id])
    return registro;
}

export async function BuscarEstadoFiltro(NomeCidade) {
    const comando = `
    SELECT *
    FROM ESTADOS
    WHERE nm_cidade
    LIKE ?
    `

    const [registro] = await connection.query(comando, [`%${NomeCidade}%`])
    return registro;
}

export async function AlterarCidade(id, Changes) {
    const comando = `
    UPDATE ESTADOS
    SET nm_estado = ?,
    vl_viagem = ?,
    bl_popular = ?,
    nm_cidade = ?,
    bl_onibus = ?,
    vl_pessoas = ?,
    vl_taxa_de_crime = ?,
    bl_empregos = ?,
    bl_sotaque = ?
    where id_nm = ?
    `

    const [info] = await connection.query(comando, [
        Changes.NM_ESTADO,
        Changes.VL_VIAGEM,
        Changes.BL_POPULAR,
        Changes.NM_CIDADE,
        Changes.BL_ONIBUS,
        Changes.VL_PESSOAS,
        Changes.VL_,
        Changes.bl_empregos,
        Changes.bl_sotaque
    ])

    return info.affectedRows;
}

export async function DeletarEstado(id) {
    const comando = `
    DELETE FROM
    ESTADOS
    WHERE id_nm = ?
    `

    const [info] = await connection.query(comando, [id])
    return info;
}