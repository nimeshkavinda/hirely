import endpoints from "../config";

export default async function getCandidates() {
  return await (
    await fetch(`${endpoints.CANDIDATE}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
