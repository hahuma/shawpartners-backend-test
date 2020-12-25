import express, { Express } from "express"
import cors from "cors"

import dotenv from "dotenv"

import routes from "./routes"
dotenv.config()
class App {
  public express: Express

  constructor() {
    this.express = express()
    this._middlewares()
    this._routes()
  }

  private _middlewares() {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private _routes() {
    this.express.use(routes)
  }
}

export default new App().express
