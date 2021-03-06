import Server from './classes/server';
import routes from './routes/routes';
import bodyParser from 'body-parser';
import cors from 'cors';
const server = new Server();

// Body parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// Rutas de mi app
server.app.use('/', routes);

server.app.use(cors());

// Levantar express
server.start();

module.exports = server;
