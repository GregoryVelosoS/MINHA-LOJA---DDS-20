// Importa a conexão com o banco de dados
const pool = require("../config/db.js")

// Objeto com as funções do model
const pedidosModel = {

    // função que solicita ao banco a lista de pedidos
    async listarPedidos() {
        // Cria o comando sql para listar os pedidos
        const sql = "SELECT * FROM pedidos"
        // Faz a consulta sql e guarda o resultado na variavel linhas
        const [linhas] = await pool.query(sql)
        // Rertona linhas para o controller
        return linhas
    }

}

// Exporta esse objeto pra ser utilizado em outros arquivos
module.exports = pedidosModel