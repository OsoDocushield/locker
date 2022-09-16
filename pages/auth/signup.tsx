import { useSession } from "next-auth/react"
import router from "next/router"
import Layout from "../../components/layout"

export default function SignUp() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  if (session) {
    router.push("/")
  }

  const handleRegister = () => {
    console.log("Register button clicked")
  }

  return (
    <Layout>
      <h1>Register page</h1>
      <div>
        <label> Email </label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <div>
        <label>Confirm</label>
        <input type="password" name="confirm" />
      </div>
      <button onClick={handleRegister}>Register</button>
    </Layout>
  )
}
