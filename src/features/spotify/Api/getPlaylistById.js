import Api from "./Api";

const getPlaylistById = async (token, id) => {
  let playlist;
  try {
    const response = await Api.get(`playlists/${id}`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    playlist = response.data;
  } catch (error) {
    alert("Loading failed: " + error.message);
  }

  return playlist;
};
export default getPlaylistById;
