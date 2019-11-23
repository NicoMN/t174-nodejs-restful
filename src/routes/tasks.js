const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/check-auth');

router.post('/', checkAuth, (request, response) => {
    const data = {
        message: 'Handling HTTP POST requests for /api/tasks'
    };

    response
        //.status(HttpStatus.OK)
        .status(200)
        .json(data);
});

router.get('/', (request, response) => {
    const data = {};
        data.message = `Handling ${request.protocol} ${request.method} for /api/tasks`;
    

    response
        .status(200)
        .json(data);
});

router.get('/:taskId', (request,response) => {
    const data = {
        taskId: request.params.taskId,
        message: `Handling HTTP GET by ID`
    }

    response
        .status(200)
        .json(data);
});

router.patch('/:taskId', (request,response) => {
    const data = {
        taskId: request.params.taskId,
        message: `Handling HTTP PATCH request by ID`
    }

    response
        .status(200)
        .json(data);
});

router.delete('/:taskId', (request,response) => {
    const data = {
        taskId: request.params.taskId,
        message: `Handling HTTP DELETE request by ID`
    }

    response
        .status(200)
        .json(data);
});

module.exports = router;