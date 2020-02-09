import express from 'express';

export default class Server {

    public app: express.Application;
    public port: number = 3000;

    /* private static instance: Server | undefined; */
    constructor() {
        this.app = express();
    }

    start() {
        this.app.listen(this.port, 'localhost', () => {
            console.log(`Server running in port ${this.port}!`);
        });
    }

    /*  public static getInstance(): Server {
         if (this.instance === undefined) {
             this.instance = new Server();
         }
         return this.instance;
     } */

}
