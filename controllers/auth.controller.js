const db = require("../models");
const User = db.Users;
const { Op } = require("sequelize");

const SecretJwt = process.env.SECRET_JWT;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const moment = require("moment");

exports.signin = (req, res) => {
    console.log(req,"======================ini req===================")
    User.findOne({
        where: {
            username: {
                [Op.eq]: req.body.username,
            },
        },
    })
    .then(async (user) => {
    if (!user) {
        return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
    );

    if (!passwordIsValid) {
        return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
        });
    }

    await User.update(
        {
            lastLogin: moment().format(),
        },
        {
            where: {
                username: {
                    [Op.eq]: req.body.username,
                },
            },
        }
    );

    const token = jwt.sign(
        { id: user.id, username: user.username },
        SecretJwt,
        {
            expiresIn: user.username ? 1800 : 30, // 30 minutes for admin & 30 seconds for not admin
        }
    );

        res.status(200).send({
            id: user.id,
            username: user.username,
            accessToken: token,
        });
    })
    .catch((err) => {
        res.status(500).send({ message: err.message });
    });
};
