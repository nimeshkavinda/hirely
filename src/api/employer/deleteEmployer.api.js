import endpoints from "../config";

export default async function deleteEmployer(uid) {
  return await (
    await fetch(`${endpoints.EMPLOYER}/${uid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
