import "./videos.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useWatchlater } from "../../context/watchlater-context";
import { useLikedvideo } from "../../context/likedvideo-context";

export default function Showvideo() {
  let { videoId } = useParams();
  const [video, setvideo] = useState({});
  const { likedvideodispatch } = useLikedvideo();
  const { watchlaterdispatch } = useWatchlater();
  useEffect(() => {
    (async () => {
      const { video: data } = await axios
        .get(`https://VL.saswatidas.repl.co/videos/${videoId}`)
        .then((response) => {
          return response.data;
        });
      setvideo(data);
    })();
  });

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
        <button onClick={() => Addtolikedvideos()}>Add to Liked Videos</button>
        <button onClick={() => Addtowatchlater()}>Add to Watch Later</button>
      </div>
    </div>
  );
}
