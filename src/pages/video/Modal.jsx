// import { useState } from "react";
import { usePlaylist } from "../../context/playlist-context";
import { useWatchlater } from "../../context/watchlater-context";
import { useLikedvideo } from "../../context/likedvideo-context";
import axios from "axios";
import { Link } from "react-router-dom";
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
          videourl: video.videourl,
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
          videourl: video.videourl,
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


  function addtoPlaylist(iteminplaylist) {}

  if(playlist.length===0){
    return (
      <div>
          <Link to="/playlist"><button className="modal-btn" >Create playlist</button></Link>
          <button className="modal-btn" onClick={() => Addtowatchlater()}>Save to watch later</button>
          <button className="modal-btn" onClick={() => Addtolikedvideos()}>Save to Liked Videos</button>
      </div>
    );
  }
  return (
    <div>
        <button className="modal-btn" >Add to playlist</button>
        <button className="modal-btn" onClick={() => Addtowatchlater()}>Save to watch later</button>
        <button className="modal-btn" onClick={() => Addtolikedvideos()}>Save to Liked Videos</button>
    </div>
  );
}
