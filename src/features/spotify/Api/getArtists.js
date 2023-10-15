import Api from "./Api";

const getArtists = async (token) => {
  let artists;
  try {
    const response = await Api.get(
      "/artists?ids=57g2v7gJZepcwsuwssIfZs,5HZtdKfC4xU0wvhEyYDWiY,3FZ4GX2mWNn7XElse3fQWd,2Bwp23pD4UVsSkchHDZw4F,3mibIJiduF0MVLLAvHZAxw,4grjJqg7iwQ8RKHs8d9Snh,2xvW7dgL1640K8exTcRMS4,5dfZ5uSmzR7VQK0udbAVpf,1LEtM3AleYg1xabW6CRkpi,2nSO7JYDbJrYbJmP39qUzj",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    artists = response.data;
  } catch (error) {
    alert("Loading failed: " + error.message);
  }

  return artists;
};
export default getArtists;
