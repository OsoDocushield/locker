import mongoose from "mongoose"

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}

const connectDB = async () => {
  try {
    await mongoose.connect(uri, options)

    console.log("MongoDB Connected...")
  } catch (err) {
    console.error(err)
    // Exit process with failure
    process.exit(1)
  }
}

export default connectDB;