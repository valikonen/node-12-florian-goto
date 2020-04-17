import defaultMiddlewares from './default';

export default function registerMiddlewares(server) {
    defaultMiddlewares(server);
}