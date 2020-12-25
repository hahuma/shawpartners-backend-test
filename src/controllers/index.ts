import ListUsersController from "./ListUsersController"
import ShowUserDetailsController from "./ShowUserDetailsController"
import ListUserRepositoriesController from "./ListUserRepositoriesController"

const listUserController = new ListUsersController()
const showUserDetailsController = new ShowUserDetailsController()
const listUserRepositoriesController = new ListUserRepositoriesController()

export {
  listUserController,
  showUserDetailsController,
  listUserRepositoriesController,
}
