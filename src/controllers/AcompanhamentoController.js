const Controller = require("./Controller.js");
const AcompanhamentoService = require("../services/AcompanhamentoServices.js");

const acompanhamentoServices = new AcompanhamentoService();

class AcompanhamentoController extends Controller {
    constructor() {
        super(acompanhamentoServices);
    };
};

module.exports = AcompanhamentoController;