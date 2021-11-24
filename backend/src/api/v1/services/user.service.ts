import { IUser } from "../interfaces/user.interface"
import User from "../models/user.model"

export const createUser = async (user: IUser) => {
  const newUser = new User(user)
  return await newUser.save()
}

export const getUsers = async () => {
  return await User.find()
}

export const getUser = async (id: string) => {
  return await User.findById(id)
}

export const updateUser = async (id: string, user: IUser) => {
  return await User.findByIdAndUpdate(id, user, {new: true})
}

export const deleteUser = async (id: string) => {
  return await User.findByIdAndDelete(id)
}
