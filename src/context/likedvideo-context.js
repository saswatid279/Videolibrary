import { createContext } from "react";
import { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import likedvideoReducer from "../reducers/likedvideoreducer";
export const LikedvideoContext = createContext();

export const LikedvideoProvider = ({ children }) => {
  const [state, likedvideodispatch] = useReducer(likedvideoReducer, {
    likedvideo: []
  });
  useEffect(() => {
    (async () => {
      const { videos: data } = await axios
        .get("https://videolibrary.saswatidas.repl.co/likedvideos")
        .then((response) => {
          return response.data;
        });
      likedvideodispatch({ type: "FETCH", payload: data });
    })();
  }, []);

  return (
    <LikedvideoContext.Provider
      value={{ likedvideo: state.likedvideo, likedvideodispatch }}
    >
      {children}
    </LikedvideoContext.Provider>
  );
};
export function useLikedvideo() {
  return useContext(LikedvideoContext);
}
