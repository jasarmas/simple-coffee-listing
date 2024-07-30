export const getCoffees = async <T>() => {
  const url =
    "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json";
  try {
    const response = await fetch(url);
    const status = response.status;
    if (!response.ok) {
      return { data: [], error: `Error: ${response.statusText}`, status };
    }
    const data: T = await response.json();
    return { data, status };
  } catch (err) {
    console.error("Error Fetching data:", err);
    return {
      data: [],
      error: "Service Unavailable at the moment",
      status: "500",
    };
  }
};
