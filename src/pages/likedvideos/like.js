import { useLikedvideo } from "../../context/likedvideo-context";
// import { useCart } from "../../context/cart-context";
//import "./likedvideolist.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Likedvideos() {
  const { likedvideo, likedvideodispatch } = useLikedvideo();

  const removefromlikedvideo = (id) => {
    (async () => {
      const { success } = await axios
        .delete(`https://videolibrary.saswatidas.repl.co/likedvideos/${id}`)
        .then((response) => {
          return response.data;
        });
      if (success) {
        likedvideodispatch({ type: "REMOVE", payload: id });
      } else {
        console.log("error occured while removing video");
      }
    })();
  };
  // const Addtocart = (video) => {
  //   console.log(video._id);
  //   (async () => {
  //     const { success, product: data } = await axios
  //       .post("https://homedecor.saswatidas.repl.co/cart", {
  //         _id: video._id,
  //         info: video.info,
  //         name: video.name,
  //         price: video.price,
  //         quantity: 1,
  //         url: video.url,
  //         fastdelivery: video.fastdelivery,
  //         instock: video.instock
  //       })
  //       .then((response) => {
  //         return response.data;
  //       });

  //     if (success) {
  //       dispatch({ type: "add", payload: video });
  //     } else {
  //       console.log("error");
  //     }
  //   })();
  //};
  function Showiteminlikedvideo(video) {
    if (likedvideo !== " ")
      return (
        <div
          style={{
            border: `1px solid black`,
            padding: `1rem`,
            margin: `1rem`
          }}
        >
          <li key={video._id}> {video.name}</li>
          <p>{video.price}</p>
          <span>
            <button
              className=" "
              onClick={() => removefromlikedvideo(video._id)}
            >
              Remove
            </button>
          </span>
        </div>
      );
    else return <div></div>;
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
