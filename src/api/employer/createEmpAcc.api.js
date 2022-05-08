import endpoints from "../config";

export default async function createEmpAcc(data) {
  return await (
    await fetch(endpoints.EMPLOYER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
  ).json();
}
