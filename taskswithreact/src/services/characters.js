const API_URL = 'https://rickandmortyapi.com/api';

export async function getAllCharacters() {
  try {
    const response = await fetch(`${API_URL}/character`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getSingleCharacter(id) {
  try {
    const response = await fetch(`${API_URL}/character/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
