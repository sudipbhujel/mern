export default {
  // user model
  User: {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "User identification number",
        example: "ytyVgh",
      },
      name: {
        type: "string",
        description: "User's name",
        example: "John Doe",
      },
      email: {
        type: "string",
        description: "User's email",
        example: "john@example.com",
      },
      avatar: {
        type: "string",
        description: "User's avatar",
        example: "https://avatars.dicebear.com/api/human/john.doe.svg",
      },
    },
  },
  // User input model
  UserInput: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "User's name",
        example: "John Doe",
      },
      email: {
        type: "string",
        description: "User's email",
        example: "john@example.com",
      },
      avatar: {
        type: "string",
        optional: true,
        description: "User's avatar",
        example: "https://avatars.dicebear.com/api/human/john.doe.svg",
      },
    },
  },
}
