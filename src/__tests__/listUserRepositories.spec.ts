import request from "supertest"
import app from "../app"

describe("### List User Repositories", () => {
  test("should return a list of repositories from a user", async () => {
    const hahuma = "hahuma"
    const response: [] = await request(app)
      .get(`/api/users/${hahuma}/repos`)
      .expect(200)
      .then((res: any) => res.body)

    response.forEach((repository) => {
      expect(repository).toHaveProperty("name")
      expect(repository).toHaveProperty("id")
      expect(repository).toHaveProperty("owner")
      expect(repository).toHaveProperty("private")
      expect(repository).toHaveProperty("description")
    })
  })
})
