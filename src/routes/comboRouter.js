const { Router } = require("express");
const ComboController = require("../controllers/ComboController.js");

const comboController = new ComboController();
const router = Router();

router.get('/combos', (req, res) => comboController.pegaRegistros(req, res))
      .get('/combos/:id', (req, res) => comboController.pegaPorId(req, res))
      .post('/combos', (req, res) => comboController.criaNovoRegistro(req, res))
      .put('/combos/:id', (req, res) => comboController.atualizaUmRegistro(req, res))
      .delete('/combos/:id', (req, res) => comboController.excluiUmRegistro(req, res));

module.exports = router;