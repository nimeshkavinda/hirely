import endpoints from "../config";

export default async function deleteEmployer(uid) {
  return await (
    await fetch(`${endpoints.EMPLOYER}/${uid}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
