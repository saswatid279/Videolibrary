import React from "react"
import { NavLink } from "react-router-dom"
import "./navbar.css";
export default function Navbar(){
    return(
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

      
    );

}