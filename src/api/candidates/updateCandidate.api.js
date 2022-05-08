import endpoints from "../config";

export default async function updateCandidate(uid, data) {
  return await (
    await fetch(`${endpoints.CANDIDATE}/${uid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
  ).json();
}
