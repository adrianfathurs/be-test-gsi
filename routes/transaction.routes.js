const express = require("express");
const router = express.Router();

const { authJwt } = require("../middleware");
const controllerTransactions = require("../controllers/transactions.controller");

router.post("/add", [authJwt.verifyToken], controllerTransactions.add);
router.get("/list-location", [authJwt.verifyToken], controllerTransactions.listLocation);
router.get("/list-items", [authJwt.verifyToken], controllerTransactions.listItems);
router.get("/list-karyawan", [authJwt.verifyToken], controllerTransactions.listKaryawan);
router.get("/list-transaction", [authJwt.verifyToken], controllerTransactions.listTransactions);

module.exports = router;
