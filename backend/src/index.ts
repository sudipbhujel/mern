import mongoose from "mongoose"
import app from "./app"

// Port
const port = process.env.PORT || 4000

const start = async () => {
  if (
    //   Not defined env variable
    false
  ) {
    throw new Error("Define Environment variables correctly")
  }
  try {
    // connect mongoose
    console.log("Connecting to mongoose...")
    await mongoose.connect("mongodb://root:example@db:27017/", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })

    console.log("Connected to MongoDB")
  } catch (error) {
    console.log("Error connecting to mongoose")
    console.log(error)
  }
  app.listen(port, () => {
    console.log(`Server started at port ${port}`)
  })
}

start()
