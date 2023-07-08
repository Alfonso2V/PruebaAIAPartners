const express = require('express');
const app = express.Router();
const { save, updateById, getAll, deleteById, getById } = require('../functions/packages');

app.get('/getPackages', (req, res) => getAll(res));
app.get('/getPackages/:id', (req, res) => {
    !isNaN(req.params.id) ? getById(req.params, res) : res.status(400).json({ respuesta: 'Solicitud invalida' });
});
app.put('/send', (req, res) => save(req.body, res));
app.post('/update', (req, res) => updateById(req.body, res));
app.delete('/delete', (req, res) => deleteById(req.body, res));
app.all('/*', (req, res) => { res.status(404).json({ respuesta: 'Recurso no encontrado x_x' }) })

module.exports = app;