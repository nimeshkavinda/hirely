import endpoints from "../config";

export default async function createEmpAcc(data) {
  return await (
    await fetch(endpoints.EMPLOYER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
}
