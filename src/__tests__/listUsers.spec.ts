import request from "supertest"
import app from "../app"

describe("### List Users Pagination", () => {
  test("should return a paginated list of users from github", async () => {
    const response = await request(app)
      .get("/api/users")
      .query({
        since: 1,
      })
      .expect(200)
      .then((res: any) => res.body)
    expect(response).toHaveProperty("link")
    expect(response).toHaveProperty("data")
  })
})
