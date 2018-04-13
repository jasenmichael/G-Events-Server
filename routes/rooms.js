const express = require('express');
const router = express.Router();

const queries = require('../room-queries');

router.get("/", (request, response, next) => {
    queries.list().then(rooms => {
        response.json({rooms});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(room => {
        room
            ? response.json({room})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(room => {
        response.status(201).json({room});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(room => {
        response.json({room});
    }).catch(next);
});

module.exports = router;
