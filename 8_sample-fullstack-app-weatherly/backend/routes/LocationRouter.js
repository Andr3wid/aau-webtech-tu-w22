const express = require('express');
const DbService = require('../services/DbService');
const locationRouter = express.Router();

locationRouter.use(express.json());

locationRouter.get('/', (req, res) => {
    DbService.getAllLocations()
        .then(locationDbResponse => {
            res.send(JSON.stringify(locationDbResponse.rows));
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        });
});

locationRouter.post('/', (req, res) => {
    DbService.insertLocation(req.body.name, req.body.latitude, req.body.longitude)
        .then(() => {
            res.status(204).send();
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        })
});

locationRouter.delete('/:id', (req, res) => {
    DbService.deleteLocation(req.params.id)
        .then(() => {
            res.status(204).send();
        })
        .catch(err => {
            res.status(500).send(JSON.stringify(err));
        })
});

module.exports = locationRouter;