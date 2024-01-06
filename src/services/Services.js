const dataSource = require("../database/models");

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel;
    };
    //Métodos genéricos que são flexíveis a ser utilizado em quaisquer tabelas do banco de dados
    //Método GET all, pegando todos os registro da tabela do modelo
    async pegaTodosOsRegistros() {
        return dataSource[this.model].findAll({ 
            order: [
                ['id', 'ASC']
              ],
        });
    };

    //Método GET por id, pegando o registro através da PK (primary key)
    async pegaUmRegistroPorId(id) {
        return dataSource[this.model].findByPk(id);
    };

    //Método GET para selecionar por limite de 3 em 3
    async pegaTresRegistros(page) {
        const skip = page * 3
        return dataSource[this.model].findAll({ limit: 3, offset: skip });
    };

    //Método GET para selecionar por limite de 4 em 4
    async pegaQuatroRegistros(page) {
        const skip = page * 4
        return dataSource[this.model].findAll({ limit: 4, offset: skip });
    };

    //Método POST criando um registro na tabela do modelo
    async criaRegistro(dadosDoRegistro) {
        return dataSource[this.model].create(dadosDoRegistro);
    };

    //Método PUT para atualizar um registro na tabela do modelo
    async atualizaRegistro(dadosAtualizado, id) {
        const listaDeRegistrosAtualizados = dataSource[this.model].update(dadosAtualizado, {
            where: {
                id: id,
            }
        });

        if(listaDeRegistrosAtualizados[0] === 0) return false;
        return true;
    };

    //Método DELETE para apagar um registro na tabela do modelo
    async excluiRegistro(id) {
        return dataSource[this.model].destroy({
            where: {
                id: id,
            }
        });
    };
};

module.exports = Services;