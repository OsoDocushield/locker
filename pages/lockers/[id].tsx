import Layout from "../../components/layout"

export default function Locker() {
  const handlePreview = () => {
    console.log("Preview button Clicked")
  }

  // If session exists, display content
  return (
    <Layout>
      <h1>Locker NAME</h1>
      <div>
        <button>upload</button>
      </div>
      <br />
      <div>
        <button>preview</button>
      </div>
    </Layout>
  )
}
