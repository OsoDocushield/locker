export const connectZelcore = async () => {
  try {
    const getAccounts = await fetch("http://127.0.0.1:9467/v1/accounts", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ asset: "kadena" }),
    });

    const getAccountsJson = await getAccounts.json();

    if (getAccountsJson.error) {
      console.log("Error getting accounts");
      return;
    }

    if (getAccountsJson.data.length === 0) {
      console.log("No accounts found");
      return;
    }
  }
  catch {
    console.log("Error");
  }
};