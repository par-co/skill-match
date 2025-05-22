export const careersLoader = async () => {
  // using json-server
  // json-server -p 8000 -w ./data/db.json
  const url = "http://localhost:8000";

  // using mockapi
  // const url = import.meta.env.VITE_API_BASE_URL;

  const response = await fetch(`${url}/careers`);

  if (!response.ok) {
    throw Error("Could not fetch the careers.");
  }

  return response.json();
};
