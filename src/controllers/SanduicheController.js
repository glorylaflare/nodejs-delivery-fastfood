const Controller = require("./Controller.js");
const SanduicheServices = require("../services/SanduicheServices.js");

const sanduicheServices = new SanduicheServices();

class SanduicheController extends Controller {
    constructor() {
        super(sanduicheServices);
    };
}; 

module.exports = SanduicheController;