import endpoints from "../config";

export default async function getJobs() {
  return await (
    await fetch(`${endpoints.JOBS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(data),
    })
  ).json();
}
