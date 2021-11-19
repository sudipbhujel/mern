import getTodos from "./get-todos"

export default {
  "/api/v1/todos": {
    ...getTodos,
  },
}
