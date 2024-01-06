const { Router } = require("express");
const PizzaController = require("../controllers/PizzaController.js");

const pizzaController = new PizzaController();
const router = Router();

router.get('/pizzas', (req, res) => pizzaController.pegaRegistros(req, res))
      .get('/pizzas/:id', (req, res) => pizzaController.pegaPorId(req, res))
      .get('/pizzas/p3/:page', (req, res) => pizzaController.pegaTres(req, res))
      .post('/pizzas', (req, res) => pizzaController.criaNovoRegistro(req, res))
      .put('/pizzas/:id', (req, res) => pizzaController.atualizaUmRegistro(req, res))
      .delete('/pizzas/:id', (req, res) => pizzaController.excluiUmRegistro(req, res));

module.exports = router;