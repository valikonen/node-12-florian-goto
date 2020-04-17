// const { server } = require('./config');
import { server } from './config';

import { rootRouter } from './routes';

// const registerMiddlewares = require('./middlewares');
import { registerMiddlewares } from './middlewares';

async function main() {
    registerMiddlewares(server);

    server.use("/v1", rootRouter);

    server.get('/', (req, res, next) => {
        res.json({ message: `Handling ${req.method} request` })
    });

    server.post('/', (req, res, next) => {
        res.json({ message: `Handling ${req.method} request` })
    });

    server.put('/', (req, res, next) => {
        res.json({ message: `Handling ${req.method} request` })
    });

    server.delete('/', (req, res, next) => {
        res.json({ message: `Handling ${req.method} request` })
    });

    server.listen();

}

main();