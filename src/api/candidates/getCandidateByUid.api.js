import endpoints from "../config";

export default async function getCandidateByUid(uid) {
  return await (
    await fetch(`${endpoints.CANDIDATE}/${uid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
