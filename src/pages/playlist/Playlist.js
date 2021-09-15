import { usePlaylist } from "../../context/playlist-context";
import "./playlist.css";
import axios from "axios";
import { useState } from "react";
import ShowallVideos from "../video/showallVideos";

export default function Playlist() {
  const [playlist_name, setplaylistname] = useState();
  const { playlist, playlistdispatch } = usePlaylist();

  const removefromplaylist = (id) => {
    (async () => {
      const { success } = await axios
        .delete(`https://videolibrary.saswatidas.repl.co/playlists/${id}`)
        .then((response) => {
          return response.data;
        });
      if (success) {
        playlistdispatch({ type: "REMOVE", payload: id });
      } else {
        console.log("error occured while removing playlists");
      }
    })();
  };
  
  function Createplaylist() {
    (async () => {
      const { success } = await axios
        .post(
          "https://videolibrary.saswatidas.repl.co/playlists/createplaylist",
          {
            playlistname: playlist_name
          }
        )
        .then((response) => {
          return response.data;
        });

      if (success) {
        playlistdispatch({ type: "ADD_TO_PLAYLIST", payload: playlist_name });
      } else {
        console.log("error");
      }
    })();
  }
  function Showiteminplaylist(playlists) {
    if (playlist !== " ")
      return (
        <>
          <div
            style={{
              border: `1px solid black`,
              padding: `1rem`,
              margin: `1rem`
            }}
          >
            <li key={playlists._id}> {playlists.playlistname}</li>
            <span>
              <button
                className=" "
                onClick={() => removefromplaylist(playlists._id)}
              >
                Remove
              </button>
              <button
                className=" "
                onClick={() => {
                  console.log(playlists.videos);
                  playlists.videos.map((video) => {
                   return ShowallVideos(video);
                  });
                }}
              >
                See Videos
              </button>
              {/* <button className=" " onClick={() => Addtocart(playlists)}>
              Add to Cart
            </button> */}
            </span>
          </div>
        </>
      );
    else return <div></div>;
  }
  if (playlist.length !== 0)
    return (
      <div>
        <h2>Playlist</h2>
        {playlist.map(Showiteminplaylist)}
      </div>
    );
  else {
    return (
      <div class="container">
        <p>Your playlist is empty</p>
        <div>
          <a href="#open-modal" className="link-btn">
            Create One!
          </a>
        </div>
        <div id="open-modal" class="modal-window">
          <div>
            <a href="/" title="Close" className="modal-close">
              Close
            </a>
            <h1>Create Your Playlist</h1>
            <div>
              <input
                placeholder="Enter Playlist name"
                onChange={(e) => setplaylistname(e.target.value)}
              />
            </div>
            <div>
              <button onClick={() => Createplaylist()}>Create</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
