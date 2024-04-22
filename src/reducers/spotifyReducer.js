const initState = {
  playlists: [],
  artists: [],
  playlistSelected: {},
  tracks: [],
  trackIndex: "",
  isPlaying: false,
  isLoading: true,
  isActive: false,
  isShowSearch: false,
  likedSongs: [], // Thêm trường likedSongs vào initState
};

export default function spotifyReducer(state = initState, action) {
  switch (action.type) {
    case "SET_PLAYLISTS":
      return { ...state, playlists: action.payload };

    case "SET_ARTISTS":
      return { ...state, artists: action.payload };

    case "SET_PLAYLIST_SELECTED":
      return { ...state, playlistSelected: action.payload };

    case "SET_TRACKS":
      return { ...state, tracks: action.payload, trackIndex: 0 };

    case "SET_TRACK_INDEX":
      return { ...state, trackIndex: action.payload };

    case "SET_IS_PLAYING":
      return { ...state, isPlaying: action.payload };

    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };

    case "SET_IS_ACTIVE":
      return { ...state, isActive: action.payload };

    case "SET_SHOW_SEARCH":
      return { ...state, isShowSearch: action.payload };

    case "TOGGLE_LIKED_SONG":
      const { song } = action.payload;
      const songIndex = state.likedSongs.findIndex(
        (likedSong) => likedSong.songName === song.songName
      );
      if (songIndex !== -1) {
        // Xóa bài hát nếu đã tồn tại trong danh sách
        return {
          ...state,
          likedSongs: state.likedSongs.filter(
            (likedSong) => likedSong.songName !== song.songName
          ),
        };
      } else {
        // Thêm bài hát vào danh sách nếu chưa tồn tại
        return {
          ...state,
          likedSongs: [...state.likedSongs, song],
        };
      }

    default:
      return state;
  }
}
