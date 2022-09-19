// This is an example of how to access a session from an API route
import type { NextApiRequest, NextApiResponse } from "next"
import bcryptjs from "bcryptjs"

import connectDB from "../../lib/mongodb"
import User from "../../models/User"

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB()
  const { name, password, email } = JSON.parse(req.body)
  
  let user = await User.findOne({ email: email })

  if (user) {
    res.status(403).json({ error: "Email is already exist" })
    return
  }

  user = new User({
    name,
    email,
    password,
  })

  const salt = await bcryptjs.genSalt(10)

  user.password = await bcryptjs.hash(password, salt)

  await user.save()

  res.status(200).json({ email, password })
}
