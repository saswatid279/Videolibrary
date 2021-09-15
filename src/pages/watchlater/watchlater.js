import { useWatchlater } from "../../context/watchlater-context";
// import { useCart } from "../../context/cart-context";
//import "./likedvideolist.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Watchlater() {
  const { watchlater, watchlaterdispatch } = useWatchlater();

  const removefromwatchlater = (id) => {
    (async () => {
      const { success } = await axios
        .delete(`https://videolibrary.saswatidas.repl.co/watchlater/${id}`)
        .then((response) => {
          return response.data;
        });
      if (success) {
        watchlaterdispatch({ type: "REMOVE", payload: id });
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
  function Showiteminwatchlater(video) {
    if (watchlater !== " ")
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
              onClick={() => removefromwatchlater(video._id)}
            >
              Remove
            </button>
          </span>
        </div>
      );
    else return <div></div>;
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
