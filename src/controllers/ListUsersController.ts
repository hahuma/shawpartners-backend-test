import { Request, Response } from "express"
import { IUsersList } from "../@types/githubApi"
import { githubApi } from "../services/api"
import { AxiosResponse } from "axios"

export default class ListUsersController {
  public async list(req: Request, res: Response) {
    const since = req.query["since"] || 0
    const { headers, data } = await githubApi.get<
      any,
      AxiosResponse<IUsersList>
    >(`/users?since=${since}`)
    return res.json({
      link: headers.link,
      data,
    })
  }
}
