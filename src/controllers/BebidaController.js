const Controller = require("./Controller.js");
const BebidaServices = require("../services/BebidaServices.js");

const bebidaServices = new BebidaServices();

class BebidaController extends Controller {
    constructor() {
        super(bebidaServices);
    };

    async pegaQuatro(req, res) {
        const { page } = req.params;
        try {
            const listaComQuatroRegistros = await this.entidadeService.pegaQuatroRegistros(Number(page));
            return res.status(200).json(listaComQuatroRegistros);
        } catch (error) {
            return res.status(500).json({
                mensagem: `Falhou!...${error.message}`
            });   
        }
    };
};

module.exports = BebidaController;