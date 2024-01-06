const { Router } = require("express");
const BebidaController = require("../controllers/BebidaController.js");

const bebidaController = new BebidaController();
const router = Router();

router.get('/bebidas', (req, res) => bebidaController.pegaRegistros(req, res))
      .get('/bebidas/:id', (req, res) => bebidaController.pegaPorId(req, res))
      .get('/bebidas/p3/:page', (req, res) => bebidaController.pegaTres(req, res))
      .get('/bebidas/p4/:page', (req, res) => bebidaController.pegaQuatro(req, res))
      .post('/bebidas', (req, res) => bebidaController.criaNovoRegistro(req, res))
      .put('/bebidas/:id', (req, res) => bebidaController.atualizaUmRegistro(req, res))
      .delete('/bebidas/:id', (req, res) => bebidaController.excluiUmRegistro(req, res));

module.exports = router;