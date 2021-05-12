import Server from "./classes/server";
import router from './routes/router';

import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();


//Body Parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

//Cors

server.app.use( cors({ origin: true, credentials: true}));

//routers
server.app.use('/', router);

server.start(() => {

    console.log(`Servidor Abierto en el Puerto ${server.port}`);
});