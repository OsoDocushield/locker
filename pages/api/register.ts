// This is an example of how to access a session from an API route
import type { NextApiRequest, NextApiResponse } from "next"

import connectDB from "../../lib/mongodb"
import User from "../../models/User"

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB()
  console.log(req.body)
  res.send(JSON.stringify("hhe", null, 2))
}
