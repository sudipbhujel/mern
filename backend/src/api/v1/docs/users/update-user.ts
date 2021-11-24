export default {
  put: {
    tags: ["User"],
    description: "Update user",
    operationId: "updateUser",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: "#/definitions/id",
        },
        required: true,
        description: "Id of user to be updated",
      },
      {
        name: "body",
        in: "body",
        description: "Update user object",
        required: true,
        schema: {
          $ref: "#/definitions/UserInput",
        },
      },
    ],
    responses: {
      200: {
        description: "User updated successfully",
      },
      404: {
        description: "User not found",
      },
      500: {
        description: "Server error",
      },
    },
  },
}
