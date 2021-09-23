import { usePlaylist } from "../../context/playlist-context";
import "./playlist.css";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Playlist() {
  const [playlist_name, setplaylistname] = useState();
  const { playlist, playlistdispatch } = usePlaylist();

  const removefromplaylist = (id) => {
    (async () => {
      const { success } = await axios
        .delete(`https://VL.saswatidas.repl.co/playlists/${id}`)
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
      const { success,playlist:data } = await axios
        .post(
          "https://vl.saswatidas.repl.co/playlists/createplaylist",
          {
            playlistname: playlist_name
          }
        )
        .then((response) => {
          return response.data;
        });

      if (success) {
        alert("playlist is created")
        playlistdispatch({ type: "CREATE_PLAYLIST", payload: data });
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
              <Link to={`/playlistvideos/${playlists._id}`} ><button
                className=" "
              >
                See Videos
              </button>
              </Link>
            </span>
          </div>
        </>
      );
    else return <div></div>;
  }
  if (playlist.length !== 0)
    return (
      <div>
       
        {playlist.map(Showiteminplaylist)}
        <div>
          <a href="#open-modal" className="link-btn">
            Create Playlist
          </a>
        </div>
        <div id="open-modal" class="modal-window">
          <div>
            <a href="/playlist" title="Close" className="modal-close">
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
            <a href="/playlist" title="Close" className="modal-close">
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
