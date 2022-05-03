import endpoints from "../config";

export default async function updateCandidate(uid, data) {
  return await (
    await fetch(`${endpoints.CANDIDATE}/${uid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
}
