import { Router } from "express"
import {
  listUserController,
  showUserDetailsController,
  listUserRepositoriesController,
} from "../controllers"

const routes = Router()

routes.get("/api/users", listUserController.list)
routes.get(
  "/api/users/:username/details",
  showUserDetailsController.show,
)
routes.get(
  "/api/users/:username/repos",
  listUserRepositoriesController.list,
)

export default routes
