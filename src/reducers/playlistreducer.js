export function playlistReducer(state, action) {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        playlist: action.payload
      };
    case "FETCH_VIDEOS":
      return {
        ...state,
        playlistvideos: action.payload
      };
    case "ADD_TO_PLAYLIST":
      let count = 0;
      state.playlist.map((item) => {
        if (item._id === action.payload._id) count = count + 1;
        return item;
      });
      if (count === 0 || state.playlist.length === 0)
        return {
          ...state,
          playlist: [...state.playlist, action.payload]
        };
      return state;
    case "REMOVE":
      return {
        ...state,
        playlist: state.playlist.filter((item) => item._id !== action.payload)
      };
    default:
      return state;
  }
}
