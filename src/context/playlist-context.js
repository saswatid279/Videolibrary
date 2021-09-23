import { createContext } from "react";
import { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { playlistReducer } from "../reducers/playlistreducer";
export const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [state, playlistdispatch] = useReducer(playlistReducer, {
    playlist: [],
    playlistvideos: []
  });
  useEffect(() => {
    (async () => {
      const { success, playlists: data } = await axios
        .get("https://VL.saswatidas.repl.co/playlists")
        .then((response) => {
          return response.data;
        });
        if(success)
      playlistdispatch({ type: "FETCH", payload: data });
    })();
  }, [playlistdispatch]);

  return (
    <PlaylistContext.Provider
      value={{ playlist: state.playlist, playlistvideos:state.playlistvideos,playlistdispatch }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};
export function usePlaylist() {
  return useContext(PlaylistContext);
}
