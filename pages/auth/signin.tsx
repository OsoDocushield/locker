import { getProviders, signIn } from "next-auth/react"
import { InferGetServerSidePropsType } from "next"

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      {providers && Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            {provider.name}
          </button>
        </div>
      ))}
    </>
  )
}
