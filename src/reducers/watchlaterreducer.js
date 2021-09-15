export default function watchlaterReducer(state, action) {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        watchlater: action.payload
      };
    case "ADD_TO_WATCHLATER":
      let count = 0;
      state.watchlater.map((video) => {
        if (video._id === action.payload._id) count = count + 1;
        return video;
      });
      if (count === 0 || state.watchlater.length === 0)
        return {
          ...state,
          watchlater: [...state.watchlater, action.payload]
        };
      return state;
    case "REMOVE":
      return {
        ...state,
        watchlater: state.watchlater.filter(
          (video) => video._id !== action.payload
        )
      };
    default:
      return state;
  }
}
