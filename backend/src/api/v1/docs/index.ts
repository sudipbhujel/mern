import basicInfo from "./basicinfo"
import definitions from "./definitions"
import server from "./server"
import tags from "./tags"
import todos from "./todos"
import users from "./users"

export default {
  ...basicInfo,
  ...server,
  ...definitions,
  ...tags,
  paths: {
    ...todos,
    ...users,
  },
}
