import express from 'express';

export default class Server {

    public app: express.Application;
    public port: number = 3000;

    constructor() {
        this.app = express();
    }

    start() {
        this.app.listen(this.port, 'localhost', () => {
            console.log(`Server running in port ${this.port}!`);
        });
    }
}
