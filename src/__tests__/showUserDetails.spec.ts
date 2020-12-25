import request from "supertest"
import app from "../app"
import { IUserData } from "../@types/githubApi"

describe("### Show user details", () => {
  test("should return details from a user", async () => {
    const hahuma = "hahuma"
    const response: IUserData = await request(app)
      .get(`/api/users/${hahuma}/details`)
      .expect(200)
      .then((res: any) => res.body)

    expect(response).toHaveProperty("login")
    expect(response).toHaveProperty("id")
    expect(response).toHaveProperty("location")
    expect(response).toHaveProperty("email")
    expect(response).toHaveProperty("bio")
  })
})
