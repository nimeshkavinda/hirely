import endpoints from "../config";

export default async function getEmployerByUid(uid) {
  return await (
    await fetch(`${endpoints.EMPLOYER}/${uid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
