import { useLikedvideo } from "../../context/likedvideo-context";
import axios from "axios";

export default function Likevideomodal({ video }){
    const { likedvideodispatch } = useLikedvideo();
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
    return (
<div>
        <button onClick={()=>removefromlikedvideo(video._id)}className="modal-btn" >Remove</button>
        </div>
    )
}