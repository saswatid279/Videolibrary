export default function likedvideoReducer(state, action) {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        likedvideo: action.payload
      };
    case "ADD_TO_LIKEDVIDEOS":
      let count = 0;
      state.likedvideo.map((video) => {
        if (video._id === action.payload._id) count = count + 1;
        return video;
      });
      if (count === 0 || state.likedvideo.length === 0)
        return {
          ...state,
          likedvideo: [...state.likedvideo, action.payload]
        };
      return state;
    case "REMOVE":
      return {
        ...state,
        likedvideo: state.likedvideo.filter(
          (video) => video._id !== action.payload
        )
      };
    default:
      return state;
  }
}
