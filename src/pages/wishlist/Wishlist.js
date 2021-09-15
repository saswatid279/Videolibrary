import { usePlaylist } from "../../context/playlist-context";
// import { useCart } from "../../context/cart-context";
import "./playlist.css";
import axios from "axios";

export default function Wishlist() {
  const { playlist, playlistdispatch } = usePlaylist();
  //const { dispatch } = useCart();
  const removefromplaylist = (id) => {
    (async () => {
      const { success, product } = await axios
        .delete(`https://homedecor.saswatidas.repl.co/playlist/${id}`)
        .then((response) => {
          return response.data;
        });
      if (success) {
        playlistdispatch({ type: "remove", payload: id });
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
  function Showiteminplaylist(video) {
    if (playlist !== " ")
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
            <button className=" " onClick={() => removefromplaylist(video._id)}>
              Remove
            </button>
            {/* <button className=" " onClick={() => Addtocart(video)}>
              Add to Cart
            </button> */}
          </span>
        </div>
      );
    else return <div></div>;
  }
  if (playlist.length !== 0)
    return (
      <>
        <h2>Wishlist</h2>
        {playlist.map(Showiteminplaylist)}
      </>
    );
  else {
    return (
      <div class="container">
        <div className="card-w">
          <p>Your playlist is empty</p>
          <div>
            <a href="" className="link-btn">
              Create One!
            </a>
          </div>
        </div>
      </div>
    );
  }
}
