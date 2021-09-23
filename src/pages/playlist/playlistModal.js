import axios from "axios";
import { usePlaylist } from "../../context/playlist-context";

export default function PlaylistModal({video,playlistId}){
    const{playlistdispatch}=usePlaylist();
    const removefromplaylist = (videoid,playlistid) => {
        (async () => {
          const { success } = await axios
            .post(`https://VL.saswatidas.repl.co/playlists/removefromplaylist`,{
              playlistId:playlistid, videoId:videoid
            })
            .then((response) => {
              return response.data;
            });
          if (success) {
            alert("Video has been removed")
            playlistdispatch({ type: "REMOVE_FROM_PLAYLIST", payload: videoid });
          } else {
            console.log("error occured while removing video");
          }
        })();
      };
    return (
       <div>
        <button onClick={()=>removefromplaylist(video._id,playlistId)}className="modal-btn" >Remove</button>
        </div>)
}