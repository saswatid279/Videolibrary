import { Link } from "react-router-dom";
import { ReactComponent as Ellipsis } from "../../images/ellipsis.svg";
import Modal from "./Modal";
import { useState } from "react";

const ShowallVideos=(video)=>{
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
            <img src={`${video.channellogourl}` }  alt=" not available"/>
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
            <span>{show && <Modal video={video} setshow={setshow}/>}</span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default ShowallVideos;