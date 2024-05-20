// import fetch from "node-fetch";
const fetchPromise = import("node-fetch");

async function ask({ apiKey, prompt }) {
  const fetch = await fetchPromise.then((module) => module.default);
  const endpoint = `https://ai.nevolution.team/nevo?apikey=${encodeURIComponent(
    apiKey
  )}&prompt=${encodeURIComponent(prompt)}`;

  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (!data.status) {
      throw new Error(data.result);
    }
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

module.exports = { ask };
