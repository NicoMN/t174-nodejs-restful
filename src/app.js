const express = require('express');
const app = express();

// Middlewares

const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const notFound = require('./middleware/not-found');

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Routes
const taskRouter = require('./routes/tasks');
app.use('/api/tasks', taskRouter);

// Missing Routes
app.use(notFound);

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