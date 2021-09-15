import { createContext } from "react";
import { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import videoReducer from "../reducers/videoreducer";
export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, {
    videos: []
  });
  useEffect(() => {
    (async () => {
      const { videos: data } = await axios
        .get("https://videolibrary.saswatidas.repl.co/videos")
        .then((response) => {
          //console.log(success);
          return response.data;
        });
        
      dispatch({ type: "fetch", payload: data });
    })();
  }, []);

  return (
    <VideoContext.Provider
      value={{
        videos: state.videos,
        dispatch
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
export function useVideo() {
  return useContext(VideoContext);
}
