import Videos from "./pages/video/Videos.js";
import Playlist from "./pages/playlist/Playlist";
import Likedvideos from "./pages/likedvideos/like";

import Nomatch from "./pages/Nomatch";
import Home from "./pages/home/Home";
import "./route.css";
import "./styles.css";
import { Routes, Route, NavLink } from "react-router-dom";

import Showvideo from "./pages/video/showvideo";
import Watchlater from "./pages/watchlater/watchlater.js";

export default function Routepath() {
  return (
    <>
      <div className="parent-container">
        <nav className="navbar">
          <div className="navbar-left">Video Library</div>
          <NavLink end className="navbar-right" activeStyle={{}} to="/">
            Home
          </NavLink>
          <NavLink end className="navbar-right" activeStyle={{}} to="/videos">
            Videos
          </NavLink>
          <NavLink className="navbar-right" activeStyle={{}} to="/likedvideos">
            Liked Videos
          </NavLink>
          <NavLink className="navbar-right" activeStyle={{}} to="/watchlater">
            Watch Later
          </NavLink>
          <NavLink className="navbar-right" activeStyle={{}} to="/playlist">
            Playlist
          </NavLink>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/:videoId" element={<Showvideo />} />
          <Route path="/likedvideos" element={<Likedvideos />} />
          <Route path="/watchlater" element={<Watchlater />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </div>
    </>
  );
}
