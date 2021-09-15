import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from "react";
import { VideoProvider } from "./context/video-context";
//import { WishlistProvider } from "./context/wishlist-context";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PlaylistProvider } from "./context/playlist-context";
import { LikedvideoProvider } from "./context/likedvideo-context";
//import Watchlater from "./pages/watchlater/watchlater";
import { WatchlaterProvider } from "./context/watchlater-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <WatchlaterProvider>
      <LikedvideoProvider>
        <VideoProvider>
          <PlaylistProvider>
            <Router>
              <App />
            </Router>
          </PlaylistProvider>
        </VideoProvider>
      </LikedvideoProvider>
    </WatchlaterProvider>
  </StrictMode>,
  rootElement
);
