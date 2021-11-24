export default {
  // method of operation
  post: {
    tags: ["User"], // operation's tag.
    description: "Create users", // operation's desc.
    operationId: "createUser", // unique operation id.
    parameters: [
      {
        in: "body",
        name: "body",
        description: "User object that needs to be added to the database",
        required: true,
        schema: {
          $ref: "#/definitions/UserInput",
        },
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/definitions/UserInput",
          },
        },
      },
    },
    responses: {
      201: {
        description: "User created successfully",
      },
      500: {
        description: "Internal server error",
      },
    },
  },
}
