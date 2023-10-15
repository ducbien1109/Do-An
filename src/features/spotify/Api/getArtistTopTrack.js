import Api from "./Api";

const getArtistTopTrack = async (token, id) => {
  let topTrack;
  try {
    const response = await Api.get(`/artists/${id}/top-tracks?market=VN`, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    topTrack = response.data;
  } catch (error) {
    alert("Loading failed: " + error.message);
  }

  return topTrack;
};
export default getArtistTopTrack;
