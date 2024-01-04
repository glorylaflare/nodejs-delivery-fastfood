const Controller = require("./Controller.js");
const AcompanhamentosService = require("../services/AcompanhamentosService.js");

const acompanhamentosServices = new AcompanhamentosService();

class AcompanhamentoController extends Controller {
    constructor() {
        super(acompanhamentosServices);
    };
};

module.exports = AcompanhamentoController;