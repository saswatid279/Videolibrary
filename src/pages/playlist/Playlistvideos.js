import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { usePlaylist } from "../../context/playlist-context";
import axios from "axios";
import { Link } from "react-router-dom";
import { ReactComponent as Ellipsis } from "../../images/ellipsis.svg";
import PlaylistModal from "./playlistModal";



export default function Playlistvideos() {

  const { playlistvideos, playlistdispatch } = usePlaylist();
  let { playlistId } = useParams();
  const [show, setshow] = useState(false);
  useEffect(() => {
    (async () => {
      const { success, videos: data } = await axios
        .get(`https://VL.saswatidas.repl.co/playlists/${playlistId}/videos`)
        .then((response) => {
          return response.data;
        });
      if (success) {
        
        playlistdispatch({ type: "FETCH_VIDEOS", payload: data });
      }
    })();
  }, [playlistdispatch, playlistId]);
  

  function Showallvideoinplaylist(video) {
    
     return (
       <div>
         <div className="productcard">
           <Link
             to={`/videos/${video._id}`}
             style={{
               textDecoration: "none",
               color: "black",
               cursor: "pointer",
             }}
           >
             <img src={video.imageurl} alt="not available" width="100%" />
           </Link>
           <div className="card-content">
             <div className="logo">
               <img src={`${video.channellogourl}`} alt=" not available" />
             </div>
 
             <div className="videoname">
               <p>{video.name}</p>
               <small>{video.channelname}</small>
             </div>
             <div className="ellipsis-container">
               <Ellipsis
                 className="ellipsis"
                 width="1.3rem"
                 height="1.3rem"
                 style={{ cursor: "pointer", fill: "white" }}
                  onClick={() => {setshow(true)}}
               />
               <span>{show && <PlaylistModal video={video} playlistId={playlistId}/>}</span>
             </div>
           </div>
         </div>
       </div>
     );
   }

  return (
    <>
            {/* {playlistvideos.length===0 && <>Loading...</>} */}
            {playlistvideos.length!==0 && playlistvideos.map(Showallvideoinplaylist)}
               
    </>
  );
}
