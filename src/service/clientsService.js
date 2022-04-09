const clientsRepository = require('../repository/clientsRepository');

exports.getClients = async function () {
    return await clientsRepository.getClients();
};