import { Schema, model } from "mongoose"

import { IUser } from "../interfaces/user.interface"

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = ret._id
        delete ret._id
        delete ret.password
        delete ret.__v
        delete ret.createdAt
        delete ret.updatedAt
      },
    },
  }
)

const User = model<IUser>("User", userSchema)

export default User
