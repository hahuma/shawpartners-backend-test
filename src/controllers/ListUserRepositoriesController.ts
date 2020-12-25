import { Request, Response } from "express"
import { githubApi } from "../services/api"

export default class ListUserRepositoriesController {
  public async list(req: Request, res: Response) {
    try {
      const { username } = req.params

      const { data } = await githubApi.get(
        `/users/${username}/repos`,
      )

      return res.json(data)
    } catch (error) {
      res.status(error.status).send(error)
    }
  }
}
