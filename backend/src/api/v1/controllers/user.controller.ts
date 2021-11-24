import { Request, Response } from "express"
import User from "../models/user.model"
import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
} from "../services/user.service"

export default class UserController {
  create = async (req: Request, res: Response) => {
    const user = await createUser(req.body)
    res.status(201).json(user)
  }
  read = async (req: Request, res: Response) => {
    const user = await getUser(req.params.id)
    res.json(user)
  }
  list = async (req: Request, res: Response) => {
    const users = await getUsers()
    res.json(users)
  }
  update = async (req: Request, res: Response) => {
    const user = await updateUser(req.params.id, req.body)
    res.json(user)
  }
  delete = async (req: Request, res: Response) => {
    await deleteUser(req.params.id)
    res.status(204).end()
  }
}
