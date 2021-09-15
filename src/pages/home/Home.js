import "../../styles.css";
import "./home.css";
// import Slideshow from "../../components/Slideshow";

// import { ReactComponent as Arrow } from "../../images/arrow.svg";
export default function Home() {
  return (
    <div class="home-container">
      <img
        src="https://res.cloudinary.com/dvrti07sl/image/upload/v1631735854/movie_bqhduk.jpg"
        alt="not available"
        width="100%"
      />
      {/* <Slideshow /> */}

      {/* <button class="floating-btn">
        <a href="#">
          <Arrow width="0.8rem" height="0.8rem" />
        </a>
      </button> */}
      <footer>
        <p>copyright@2021</p>
      </footer>
    </div>
  );
}
