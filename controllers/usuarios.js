const { response, request } = require('express');

const usuariosGet = (req=request, res=response) => { 
    const { q, nombre='Nombre indefinido', apikey, page=1, limit=10} = req.query;   
    res.json({
        msg: "get API - controlador",
        q,
        nombre,
        apikey,
        page,
        limit
    })
}

const usuariosPut = (req=request, res=response) => {
    const {id} = req.params;
    res.json({
        msg: "put API",
        id
    })
}

const usuariosPost = (req=request, res=response) => {
    const { nombre, edad } = req.body;
    res.status(201).json({
        msg: "post API",
        nombre,
        edad
    })
}

const usuariosDelete = (req=request, res=response) => {
    res.json({
        msg: "delete API",
    })
}

const usuariosPatch = (req=request, res=response) => {
    res.json({
        msg: "patch API",
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}