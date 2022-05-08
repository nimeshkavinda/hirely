import endpoints from "../config";

export default async function deleteCandidate(uid) {
  return await (
    await fetch(`${endpoints.CANDIDATE}/${uid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
