import endpoints from "../config";

export default async function createJob(data) {
  return await (
    await fetch(endpoints.JOBS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();
}
