import "./videos.css";
// import { useVideo } from "../../context/video-context";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Showvideo() {
  let { videoId } = useParams();
  const [video, setvideo] = useState({});
  // const { dispatch } = useVideo();
  useEffect(() => {
    (async () => {
      const { video: data } = await axios
        .get(`https://videolibrary.saswatidas.repl.co/videos/${videoId}`)
        .then((response) => {
          return response.data;
        });
      setvideo(data);
    })();
  });
  return (
    <div class="productdetail-container">
      <div className="productdetail-img">
        <iframe
          width="760"
          height="515"
          src={video.videourl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="productdetail-info">
        <h4>{video.name}</h4>
        <p>{video.channelname}</p>
        {/* <button onClick={() => Addtocart(video)}>Add to Cart</button> */}
      </div>
    </div>
  );
}
