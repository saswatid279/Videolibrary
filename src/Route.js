import Videos from "./pages/video/Videos.js";
import Playlist from "./pages/playlist/Playlist";
import Likedvideos from "./pages/likedvideos/like.js";
import Navbar from "./components/navbar.jsx";
import Nomatch from "./pages/Nomatch";
import Home from "./pages/home/Home";
import "./route.css";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

import Showvideo from "./pages/video/showvideo";
import Watchlater from "./pages/watchlater/watchlater.js";

export default function Routepath() {
  return (
    <>
     <Navbar/>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/:videoId" element={<Showvideo />} />
          <Route path="/likedvideos" element={<Likedvideos />} />
          <Route path="/watchlater" element={<Watchlater />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
     
    </>
  );
}
