import express, { Request, Response, Application } from "express"
import morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
import rateLimit from "express-rate-limit"

import config from "./config"
import v1Router from "./api/v1/routes"

const app: Application = express()

// Cors Options
const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (!origin || config.whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
}

// Rate Limit
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
})

// Middleware
app.use(morgan("dev"))
app.use(helmet())
app.use(cors(corsOptions))
app.use(limiter)

app.use("/api/v1", v1Router)

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Hello Stranger!",
  })
})

export default app
