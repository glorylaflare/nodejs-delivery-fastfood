const { Router } = require("express");
const AcompanhamentoController = require("../controllers/AcompanhamentoController.js");

const acompanhamentoController = new AcompanhamentoController();
const router = Router();

router.get('/acompanhamentos', (req, res) => acompanhamentoController.pegaRegistros(req, res))
      .get('/acompanhamentos/:id', (req, res) => acompanhamentoController.pegaPorId(req, res))
      .get('/acompanhamentos/p3/:page', (req, res) => acompanhamentoController.pegaTres(req, res))
      .post('/acompanhamentos', (req, res) => acompanhamentoController.criaNovoRegistro(req, res))
      .put('/acompanhamentos/:id', (req, res) => acompanhamentoController.atualizaUmRegistro(req, res))
      .delete('/acompanhamentos/:id', (req, res) => acompanhamentoController.excluiUmRegistro(req, res));

module.exports = router;