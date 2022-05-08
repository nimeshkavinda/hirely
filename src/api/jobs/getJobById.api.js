import endpoints from "../config";

export default async function getJobById(id) {
  return await (
    await fetch(`${endpoints.JOBS}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
