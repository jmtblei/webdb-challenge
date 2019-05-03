const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../routes/projects-router');
const actionsRouter = require('../routes/actions-router');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter)

server.get('/', (req, res) => {
    res.send("It's working!")
});

module.exports = server;