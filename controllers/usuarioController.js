const db = require('../database/models/Usuario');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');

const usuarioController = {
    login: async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('login', {
                errors: errors.array()
            });
        }
        const { email, password } = req.body;
        const usuario = await db.Usuario.findOne({
            where: {
                email: email
            }
        });
        if (usuario) {
            if (bcrypt.compareSync(password, usuario.password)) {
                req.session.usuarioLogado = usuario;
                res.render('/login');
                res.redirect('/');
            } else {
                res.render('/', {
                    errors: [{ msg: 'Usuário ou senha incorretos' }]
                });
            }
        } else {
            res.render('/', {
                errors: [{ msg: 'Usuário ou senha incorretos' }]
            });
        }
    },

    cadastrar: async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('/', {
                errors: errors.array()
            });
        }
        const { nome, email, password, telefone } = req.body;
        const usuario = await db.Usuario.findOne({
            where: {
                email: email
            }
        });
        if (usuario) {
            res.render('/', {
                errors: [{ msg: 'Email já cadastrado' }]
            });
        } else {
            const usuario = await db.Usuario.create({
                nome: nome,
                email: email,
                password: bcrypt.hashSync(password, 10),
                telefone: telefone
            });
            req.session.usuarioLogado = usuario;
            res.render('/cadastrar');
            res.redirect('/');
        }
    },

    logout: (req, res, next) => {
        req.session.destroy();
        res.redirect('/');
    }
}

module.exports = usuarioController;
