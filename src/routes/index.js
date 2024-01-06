const express = require("express");
const pizza = require("./pizzaRouter.js");
const sanduiche = require("./sanduicheRouter.js");
const bebida = require("./bebidaRouter.js");
const acompanhamento = require("./acompanhamentoRouter.js");
const combo = require("./comboRouter.js");
const cors = require("cors");

module.exports = app => {
    app.route("/").get((req, res) => res.status(200).send("O projeto Delivery está funcionando."));

    app.use(cors());

    app.use(
        express.json(),
        pizza,
        sanduiche,
        bebida,
        acompanhamento,
        combo,
    );
};