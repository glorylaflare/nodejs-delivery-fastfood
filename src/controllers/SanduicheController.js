const Controller = require("./Controller.js");
const SanduicheServices = require("../services/SanduicheService.js");

const sanduicheServices = new SanduicheServices();

class SanduicheController extends Controller {
    constructor() {
        super(sanduicheServices);
    };
}; 

module.exports = SanduicheController;