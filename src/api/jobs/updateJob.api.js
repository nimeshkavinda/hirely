import endpoints from "../config";

export default async function updateJob(id, data) {
  return await (
    await fetch(`${endpoints.JOBS}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
}
