"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien !!!'
    });
});
router.post('/mensajes', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const viene = req.body.viene;
    res.json({
        ok: true,
        cuerpo,
        viene,
    });
});
router.post('/mensajes/:id', (req, res) => {
    const cuerpo = req.body.cuerpo;
    const viene = req.body.viene;
    const id = req.params.id;
    res.json({
        ok: true,
        cuerpo,
        viene,
        id
    });
});
exports.default = router;
