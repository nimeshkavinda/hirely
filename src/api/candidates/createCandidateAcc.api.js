import endpoints from "../config";

export default async function createCandidateAcc(data) {
  return await (
    await fetch(endpoints.CANDIDATE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
}
