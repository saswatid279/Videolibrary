// import { useState } from "react";
import { usePlaylist } from "../../context/playlist-context";
import { useWatchlater } from "../../context/watchlater-context";
import { useLikedvideo } from "../../context/likedvideo-context";
import axios from "axios";
import "./videos.css";

export default function Modal({ video }) {
  //const [playlistname, setplaylistname] = useState();
  const { likedvideodispatch } = useLikedvideo();
  const { watchlaterdispatch } = useWatchlater();
  const { playlist } = usePlaylist();
  const Addtolikedvideos = () => {
    (async () => {
      const { success, video: data } = await axios
        .post("https://videolibrary.saswatidas.repl.co/likedvideos", {
          _id: video._id,
          name: video.name,
          imageurl: video.imageurl,
          channellogourl: video.channellogourl,
          channelname: video.channelname,
          date: video.date,
          videourl: video.videourl
        })
        .then((response) => {
          return response.data;
        });
      if (success) {
        likedvideodispatch({ type: "ADD_TO_LIKEDVIDEOS", payload: data });
      } else {
        console.log("error");
      }
    })();
  };
  const Addtowatchlater = () => {
    (async () => {
      const { success, video: data } = await axios
        .post("https://videolibrary.saswatidas.repl.co/watchlater", {
          _id: video._id,
          name: video.name,
          imageurl: video.imageurl,
          channellogourl: video.channellogourl,
          channelname: video.channelname,
          date: video.date,
          videourl: video.videourl
        })
        .then((response) => {
          return response.data;
        });
      if (success) {
        watchlaterdispatch({ type: "ADD_TO_WATCHLATER", payload: data });
      } else {
        console.log("error");
      }
    })();
  };
  function createPlaylist() {
    console.log("playlist");
  }
  function addtoPlaylist(iteminplaylist) {}
  
    return (
      <>
        <div className="contextMenu">
        if (playlist.length === 0){
          <button className="contextMenu--option" onClick={createPlaylist()}>Create playlist</button>
        }
        else{
          <div className="modal" >
          <div>
            <a href="#open-modal" className="link1">
              Add to Playlist
            </a>
          </div>
          <div id="open-modal" class="modal-window">
            <div>
              <a href="/" title="Close" className="modal-close">
                Close
              </a>
              <h2>Select a Playlist</h2>
              {playlist.map((item) => {
                return (
                  <div onClick={addtoPlaylist(item)}>{item.playlistname}</div>
                );
              })}
            </div>
          </div>
          </div>
          }
          <button onClick={() => Addtowatchlater()}>Save to watch later</button>
          <button onClick={() => Addtolikedvideos()}>
            Save to Liked Videos
          </button>
          </div>
        
      </>
    );
  }

