export default {
  delete: {
    tags: ["User"],
    description: "Deleting a user",
    operationId: "deleteUser",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: "#/definitions/id",
        },
        required: true,
        description: "Deleting a done user",
      },
    ],
    responses: {
      204: {
        description: "User deleted successfully",
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
