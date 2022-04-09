const database = require('../config/database');

exports.getClients = async function () {
    return await database.query('select * from client');
};