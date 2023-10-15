import Api from "./Api";

const getPlaylists = async (token) => {
  let playlists;
  try {
    const response = await Api.get(
      "/browse/featured-playlists?country=VN&limit=20",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    playlists = response.data;
  } catch (error) {
    alert("Loading failed: " + error.message);
  }

  return playlists;
};
export default getPlaylists;
// browse/featured-playlists?country=VN&limit=20
