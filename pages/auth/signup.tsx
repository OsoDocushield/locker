import { ChangeEvent, useState } from "react"
import { signIn, useSession } from "next-auth/react"
import router from "next/router"

import Layout from "../../components/layout"

export default function SignUp() {
  const { data: session } = useSession()

  if (session) {
    router.push("/")
  }

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  })

  const [error, setError] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async () => {
    if (!user.name) {
      setError("User name is required")
      return
    }

    if (!user.email) {
      setError("User email is required")
      return
    }

    if (!user.password) {
      setError("User password is required")
      return
    }

    if (user.password !== user.confirm) {
      setError("Password Confirm is not matched")
      return
    }
    try {
      const fetchRes = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(user),
      })

      const res = await fetchRes.json()

      // Clear user info
      setUser({
        name: "",
        email: "",
        password: "",
        confirm: "",
      })

      signIn('credentials', { redirect: false, email: res.email, password: res.password })
    } catch (err) {
      console.error("Err: ", err)
    }
  }

  return (
    <Layout>
      <div>
        <label>Name: </label>
        <input
          name="name"
          type="text"
          value={user.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password: </label>
        <input
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Confirm: </label>
        <input
          name="confirm"
          type="password"
          value={user.confirm}
          onChange={handleChange}
        />
      </div>
      <br />
      <button onClick={handleSubmit}>Register</button>
    </Layout>
  )
}
