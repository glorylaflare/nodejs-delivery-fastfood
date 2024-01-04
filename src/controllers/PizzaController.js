const Controller = require("./Controller.js");
const PizzaServices = require("../services/PizzaServices.js");

const pizzaServices = new PizzaServices();

class PizzaController extends Controller {
    constructor() {
        super(pizzaServices);
    }
};

module.exports = PizzaController;