import getUsers from "./get-users"

export default {
  "/api/v1/users": {
    ...getUsers,
  },
}
