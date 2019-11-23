const express = require('express');
const router = express.Router();

router.post('/', (request, response) => {
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
})

module.exports = router;