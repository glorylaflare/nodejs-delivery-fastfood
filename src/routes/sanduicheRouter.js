const { Router } = require("express");
const SanduicheController = require("../controllers/SanduicheController.js");

const sanduicheController = new SanduicheController();
const router = Router();

router.get('/sanduiches', (req, res) => sanduicheController.pegaTodos(req, res))
      .get('/sanduiches/:id', (req, res) => sanduicheController.pegaPorId(req, res))
      .post('/sanduiches', (req, res) => sanduicheController.criaNovoRegistro(req, res))
      .put('/sanduiches/:id', (req, res) => sanduicheController.atualizaUmRegistro(req, res))
      .delete('/sanduiches/:id', (req, res) => sanduicheController.excluiUmRegistro(req, res));

module.exports = router;