export default function videoReducer(state, action) {
  switch (action.type) {
    case "fetch":
      return {
        ...state,
        videos: action.payload
      };
    default:
      return state;
  }
}
