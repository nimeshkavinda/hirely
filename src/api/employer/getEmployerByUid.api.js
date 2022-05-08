import endpoints from "../config";

export default async function getEmployerByUid(uid) {
  return await (
    await fetch(`${endpoints.EMPLOYER}/${uid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
