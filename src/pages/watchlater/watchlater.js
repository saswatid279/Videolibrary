import { useWatchlater } from "../../context/watchlater-context";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Ellipsis } from "../../images/ellipsis.svg";
import Watchlatermodal from "./Watchlatermodal";

export default function Watchlater() {
  const { watchlater } = useWatchlater();

  
  
  function Showiteminwatchlater(video) {
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
              <span>{show && <Watchlatermodal video={video} />}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (watchlater.length !== 0)
    return (
      <>
        <h2>watch later</h2>
        {watchlater.map(Showiteminwatchlater)}
      </>
    );
  else {
    return (
      <div class="container">
        <p>There are no videos to watch</p>
        <div>
        <Link to="/videos" className="link-btn">
            Watch Videos
          </Link>
        </div>
      </div>
    );
  }
}
