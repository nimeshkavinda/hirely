import endpoints from "../config";

export default async function updateJob(uid, data) {
  return await (
    await fetch(`${endpoints.EMPLOYER}/${uid}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
}
