import express, { Request, Response, NextFunction } from "express"
import UserController from "../controllers/user.controller"

const router = express.Router()
const userController = new UserController()

const logger = (req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === "development") {
    const method = ["POST", "PUT"]
    method.includes(req.method) && console.log(req.body)
  }
  next()
}

router.use(logger)

router
  .get("", userController.list)
  .post("", userController.create)
  .get("/:id", userController.read)
  .put("/:id", userController.update)
  .delete("/:id", userController.delete)

export default router
