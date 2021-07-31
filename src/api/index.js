export const fetchAllLocations = async () => {
  const response = await fetch('https://6033c4d8843b15001793194e.mockapi.io/api/locations');

  if (!response.ok) {
    throw new Error('Something went wrong!');
  }
  return response.json();
};
