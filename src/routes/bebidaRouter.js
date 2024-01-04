const { Router } = require("express");
const BebidaController = require("../controllers/BebidaController.js");

const bebidaController = new BebidaController();
const router = Router();

router.get('/bebidas', (req, res) => bebidaController.pegaTodos(req, res))
      .get('/bebidas/:id', (req, res) => bebidaController.pegaPorId(req, res))
      .post('/bebidas', (req, res) => bebidaController.criaNovoRegistro(req, res))
      .put('/bebidas/:id', (req, res) => bebidaController.atualizaUmRegistro(req, res))
      .delete('/bebidas/:id', (req, res) => bebidaController.excluiUmRegistro(req, res));

module.exports = router;