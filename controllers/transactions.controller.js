const db = require("../models");
const Transactions = db.Transactions;
const Locations = db.Lokasis;
const Karyawans = db.Karyawans;
const Items = db.Items;
const { Op } = require("sequelize");

const SecretJwt = process.env.SECRET_JWT;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const moment = require("moment");

exports.add = (req, res) => {
    Transactions.create({
        npk: req.body.npk,
        transaction_date: req.body.transaction_date,
        location: req.body.location,
        kode: req.body.kode,
        qty_actual: req.body.qty_actual
    })
    .then(() => {
        res
        .status(200)
        .send({ message: "Transactions has been added successfully!" });
    })
    .catch((err) => {
        res.status(400).send({ message: err.message });
        console.log("disini")
    });
};

exports.listLocation = (req, res) =>{
    Locations.findAll({
        order: [["id", "DESC"]],
    })
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(400).send({ message: err.message });
    });
}

exports.listItems = (req, res) =>{
    Items.findAll({
        order: [["id", "DESC"]],
    })
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(400).send({ message: err.message });
    });
}

exports.listKaryawan = (req, res) =>{
    Karyawans.findAll({
        order: [["id", "DESC"]],
    })
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(400).send({ message: err.message });
    });
}

exports.listTransactions = (req, res) =>{
    Transactions.findAll({
        order: [["id", "DESC"]],
    })
    .then((response) => {
        res.status(200).send(response);
    })
    .catch((err) => {
        res.status(400).send({ message: err.message });
    });
}
