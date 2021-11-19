import express from "express"
import swaggerUi from "swagger-ui-express"

import userRouter from "./user.route"
import docs from "../docs"

const router = express.Router()

console.log(JSON.stringify(docs))

router.use("/docs", swaggerUi.serve)
router.get("/docs", swaggerUi.setup(docs))
router.use("/users", userRouter)

export default router
