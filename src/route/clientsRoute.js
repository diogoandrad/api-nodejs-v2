const express = require('express');
const router = express.Router();
const clientsService = require('../service/clientsService');

router.get('/', async function (req, res) {
    const clients = await clientsService.getClients();
    res.json(clients);
});

router.get('/:id', async function (req, res) {
    
});

router.post('/', async function (req, res) {
    
});

router.put('/:id', async function (req, res) {
    
});

router.delete('/:id', async function (req, res) {
    
});

module.exports = router;