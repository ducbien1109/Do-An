export const playlistsAction = (playlists) => {
  return {
    type: "SET_PLAYLISTS",
    payload: playlists,
  };
};
export const artistsAction = (artists) => {
  return {
    type: "SET_ARTISTS",
    payload: artists,
  };
};

export const playlistSelectedAction = (playlistSelected) => {
  return {
    type: "SET_PLAYLIST_SELECTED",
    payload: playlistSelected,
  };
};

export const tracksAction = (tracks) => {
  return { type: "SET_TRACKS", payload: tracks };
};
export const trackIndexAction = (index) => {
  return {
    type: "SET_TRACK_INDEX",
    payload: index,
  };
};
export const isPlayingAction = (isPlaying) => {
  return {
    type: "SET_IS_PLAYING",
    payload: isPlaying,
  };
};
export const isLoadingAction = (isLoading) => {
  return {
    type: "SET_IS_LOADING",
    payload: isLoading,
  };
};
export const isActiveAction = (isActive) => {
  return {
    type: "SET_IS_ACTIVE",
    payload: isActive,
  };
};
export const isShowSearch = (isShow) => {
  return {
    type: "SET_SHOW_SEARCH",
    payload: isShow,
  };
};
