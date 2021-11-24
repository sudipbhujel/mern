import postUser from "./create-user"
import deleteUser from "./delete-user"
import getUser from "./get-user"
import getUsers from "./get-users"
import updateUser from "./update-user"

export default {
  "/api/v1/users": {
    ...getUsers,
    ...postUser,
  },
  "/api/v1/users/{id}": {
    ...getUser,
    ...updateUser,
    ...deleteUser,
  },
}
