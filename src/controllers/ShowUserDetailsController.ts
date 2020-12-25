import { Request, Response } from "express"
import { IUserData } from "../@types/githubApi"
import { githubApi } from "../services/api"

export default class ShowUserDetailsController {
  public async show(req: Request, res: Response) {
    try {
      const { username } = req.params

      const { data } = await githubApi.get<IUserData>(
        `/users/${username}`,
      )

      return res.json(data)
    } catch (error) {
      res.status(error.status).send(error)
    }
  }
}
