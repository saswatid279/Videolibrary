import { usePlaylist } from "../../context/playlist-context";
import { useWatchlater } from "../../context/watchlater-context";
import { useLikedvideo } from "../../context/likedvideo-context";
import axios from "axios";
import { Link } from "react-router-dom";
import "./modal.css";
import { useState } from "react";

export default function Modal({ video, setshow }) {
  const { likedvideodispatch } = useLikedvideo();
  const { watchlaterdispatch } = useWatchlater();
  const { playlist } = usePlaylist();
  const [showmodal, setshowmodal] = useState(false);

  const Addtolikedvideos = () => {
    (async () => {
      const { success, video: data } = await axios
        .post("https://VL.saswatidas.repl.co/likedvideos", {
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
        .post("https://VL.saswatidas.repl.co/watchlater", {
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

  function Showplaylist(pList) {
    return (
      <div>
        <span className="playlist-namee" onClick={() => Addtoplaylist(pList._id)}>
          {pList.playlistname}
        </span>
      </div>
    );
  }

  const Addtoplaylist = (playlistId) => {
    (async () => {
      const { success, updatedplaylist: data } = await axios
        .post(`https://VL.saswatidas.repl.co/playlists/addtoplaylist`, {
          playlistId: playlistId,
          videoId: video._id,
        })
        .then((response) => {
          return response.data;
        });
      if (success) {
        alert("Added to playlist");
        console.log(data);
        //playlistdispatch({ type: "FETCH", payload: data });
      } else {
        alert("error");
      }
    })();
  };

  if (playlist.length === 0) {
    return (
      <div className="modal-container">
        <Link id="link" to="/playlist">
          <span className="modal-btn">Create playlist</span>
        </Link>
        <span className="modal-btn" onClick={() => Addtowatchlater()}>
          Save to watch later
        </span>
        <span className="modal-btn" onClick={() => Addtolikedvideos()}>
          Save to liked videos
        </span>
        <span className="modal-btn" onClick={() => setshow(false)}>
          Close
        </span>
      </div>
    );
  }
  return (
    <>
      <div className="modal-container">
        <span className="modal-btn" onClick={() => setshowmodal(true)}>
          Add to playlist
        </span>
        <span className="modal-btn" onClick={() => Addtowatchlater()}>
          Save to watch later
        </span>
        <span className="modal-btn" onClick={() => Addtolikedvideos()}>
          Save to liked videos
        </span>
        <span className="modal-btn" onClick={() => setshow(false)}>
          Close
        </span>
        {showmodal && (
          <div className="playlist-add">
            <div className="playlist-left x">
              <h4>Select a playlist</h4>
              <span>{playlist.map(Showplaylist)}</span>
            </div>
            <div className="playlist-right y">
              <button onClick={() => setshowmodal(false)} title="Close">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
