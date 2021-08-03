export const fetchAllLocations = async () => {
  const response = await fetch('https://6033c4d8843b15001793194e.mockapi.io/api/locations');

  if (!response.ok) {
    const message = `An error has occured: ${response.statusText} with status ${response.status}`;
    throw new Error(message);
  }

  return response.json();
};
