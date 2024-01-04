class Controller {
    constructor(entidadeService) {
        this.entidadeService = entidadeService;
    };

    async pegaTodos(req, res) {
        try {
            const listaDeRegistro = await this.entidadeService.pegaTodosOsRegistros();
            return res.status(200).json(listaDeRegistro);
        } catch (error) {
            return res.status(500).json({
                mensagem: `Falhou!...${error.message}`
            });
        };
    };

    async pegaPorId(req, res) {
        const { id } = req.params;
        try {
            const registro = await this.entidadeService.pegaUmRegistroPorId(Number(id));
            return res.status(200).json(registro);
        } catch (error) {
            return res.status(500).json({
                mensagem: `Falhou!...${error.message}`
            });          
        };
    };

    async criaNovoRegistro(req, res) {
        const dados = req.body;
        try {
            const novoRegistroCriado = await this.entidadeService.criaRegistro(dados);
            return res.status(200).json({
                novoRegistroCriado,
                mensagem: "Um novo registro foi criado com sucesso." 
            });
        } catch (error) {
            return res.status(500).json({
                mensagem: `Falhou!...${error.message}`
            });  
        };
    };

    async atualizaUmRegistro(req, res) {
        const { id } = req.params;
        const dados = req.body;
        try {
            const foiAtualizado = await this.entidadeService.atualizaRegistro(dados, Number(id));
            if(!foiAtualizado) return res.status(400).json({ mensagem: "O registro não foi atualizado."});
            return res.status(200).json({ 
                mensagem: "O registro foi atualizado com sucesso."
            });
        } catch (error) {
            return res.status(500).json({
                mensagem: `Falhou!...${error.message}`
            });  
        };
    };

    async excluiUmRegistro(req, res) {
        const { id } = req.params;
        try {
            await this.entidadeService.excluiRegistro(Number(id));
            return res.status(200).json({ 
                mensagem: `O registro de id ${id}, foi excluido com sucesso.`
             });
        } catch (error) {
            return res.status(500).json({
                mensagem: `Falhou!...${error.message}`
            }); 
        };
    };
};

module.exports = Controller;