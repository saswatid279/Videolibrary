import { useLikedvideo } from "../../context/likedvideo-context";

import Likevideomodal from "./Likevideomodal";
import { ReactComponent as Ellipsis } from "../../images/ellipsis.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Likedvideos() {
  const { likedvideo } = useLikedvideo();

  function Showiteminlikedvideo(video) {
    const [show, setshow] = useState(false);
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
                onClick={() => setshow(true)}
              />
              <span>{show && <Likevideomodal video={video} />}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (likedvideo.length !== 0)
    return (
      <>
        <h2>Playlist</h2>
        {likedvideo.map(Showiteminlikedvideo)}
      </>
    );
  else {
    return (
      <div class="container">
        <p>Your list of Liked Videos is empty</p>
        <div>
          <Link to="/videos" className="link-btn">
            Watch Videos
          </Link>
        </div>
      </div>
    );
  }
}
