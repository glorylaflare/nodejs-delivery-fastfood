const Controller = require("./Controller.js");
const ComboServices = require("../services/ComboServices.js");

const comboServices = new ComboServices();

class ComboController extends Controller {
    constructor() {
        super(comboServices);
    };
};

module.exports = ComboController;