const express = require("express");

module.exports = app => {
    app.route("/").get((req, res) => res.status(200).send("O projeto Delivery está funcionando."));

    app.use(
        express.json(),
    );
};