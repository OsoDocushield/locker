import router from "next/router";

import Layout from "../components/layout";

export default function Page() {
  const handleCreateLocker = () => {
    router.push('/connect-wallet');
    console.log("Create Locker clicked");
  };

  return (
    <Layout>
      <button onClick={handleCreateLocker}>+ Locker</button>
    </Layout>
  );
}
