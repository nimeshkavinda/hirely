import endpoints from "../config";

export default async function deleteJob(id) {
  return await (
    await fetch(`${endpoints.JOBS}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
