import { useWatchlater } from "../../context/watchlater-context";
import axios from "axios";
export default function Watchlatermodal({video}){
    const { watchlaterdispatch } = useWatchlater();
    const removefromwatchlater = (id) => {
        (async () => {
          const { success } = await axios
            .delete(`https://VL.saswatidas.repl.co/watchlater/${id}`)
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
    return (
        <div>
                <button onClick={()=>removefromwatchlater(video._id)}className="modal-btn" >Remove</button>
                </div>
            )
}