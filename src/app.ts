import express, { Express } from 'express'
import cors from 'cors'

import routes from './routes'


const corsOptions = {
    origin: process.env.APP_URL|| undefined
}

class App {
    public express: Express

    constructor() {
        this.express = express()
        this._middlewares()
        this._routes()
    }

    private _middlewares() {
        this.express.use(express.json())   
        this.express.use(cors(corsOptions))
    }

    private _routes() {
        this.express.use(routes)
    }
}

export default new App().express