import endpoints from "../config";

export default async function updateJob(id, data) {
  return await (
    await fetch(`${endpoints.EMPLOYER}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
  ).json();
}
