const Usuario = require('../model/User');

exports.mostrarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        return res.json(usuarios);
    } catch (err) {
        return res.status(500).json({ erro: err.message });
    }
}

exports.criarUsuario = async (req, res) => {
    try {
        const { nome, email } = req.body;
        const usuario = await Usuario.create({ nome, email });
        return res.status(201).json({ id: usuario.id, nome, email});
    } catch (err) {
        return res.status(500).json({ erro: err.message });
    }
}