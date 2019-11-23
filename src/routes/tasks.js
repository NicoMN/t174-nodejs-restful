const express = require('express');
const router = express.Router();

router.post('/', (request, response) => {
    const data = {
        message: 'HeLlO, WorLd'
    };

    response
        //.status(HttpStatus.OK)
        .status(200)
        .json(data);
});

module.exports = router;