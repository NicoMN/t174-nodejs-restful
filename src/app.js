const express = require('express');
const app = express();

const taskRouter = require('./routes/tasks');
app.use('/api/tasks', taskRouter);

module.exports = app;

/*app.use((request, response, next) => {
  const data = {
    message: "It works baby!"
  }

  response
    .status(200)
    .json(data)

    next()
});

app.use(() => console.log('Passed here!'));*/