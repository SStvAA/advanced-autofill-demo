/* ========================================= IMPORT SECTION ========================================= */
import dotenv from 'dotenv';
dotenv.config();
// Controllers
import { ClientSessionValidator } from './resources/Controllers/ClientSessionValidator.js';
import { Middleware } from './resources/Controllers/MiddleWare.js';
import { Client } from './resources/Controllers/Client.js';
import { ServerStatistics } from './resources/Controllers/ServerStatistics.js';
// Server
import { readFileSync } from "fs";
import { createServer } from "https";
import { Server } from "socket.io";

/* ========================================= SERVER CONFIGURATION ========================================= */
const httpServer = createServer({
    key: readFileSync(`${process.env.SSL_PATH}privkey.pem`),
    cert: readFileSync(`${process.env.SSL_PATH}cert.pem`),
    ca: readFileSync(`${process.env.SSL_PATH}chain.pem`)
});
const io = new Server(httpServer, {path: process.env.SERVER_PATH });
httpServer.listen(process.env.SERVER_PORT_2);

/* ========================================= EVENTS AND MIDDLEWARE ========================================= */
io.use(async (client, next) => {
    // validate session
    try{
        const isAuthorized = await (new Middleware()).isAuthorized(client);
        client.data = isAuthorized;
        next();

    }catch(error){
        // console.error('Middleware (isAuthorized):', error);
        return next(new Error(`invalid session with token: ${client.handshake.auth.token}`));
    }
   
});

io.on('connection', async (client) => {
    console.log(`Client connected: ${client.data.username}`);
    new Client(client, io);

});

/* ========================================= CONTROLLERS ========================================= */
const ClientSessionValidatorInstance = new ClientSessionValidator(io);
const ServerStatisticsInstance = new ServerStatistics(io);

/* ========================================= EVENTS ========================================= */
io.on('disconnect', (client) => {
    console.warn('The client has been disconnected:',client);
});

io.on('error', (error) => {
    console.error('There is an unhandledError', error);
});

process.on('unhandledRejection', (error) => { 
    console.error('There is an unhandledRejection:', error); 
});