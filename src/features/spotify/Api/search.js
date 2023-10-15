import Api from "./Api";

const search = async (token, query) => {
  let playlists;
  try {
    const response = await Api.get(
      `/search?q=${query}&type=artist%2Cplaylist%2Ctrack&market=VN&limit=5`,
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
export default search;
