import endpoints from "../config";

export default async function getCandidates() {
  return await (
    await fetch(`${endpoints.CANDIDATE}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
