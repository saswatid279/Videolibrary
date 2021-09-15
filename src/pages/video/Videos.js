import { useVideo } from "../../context/video-context";
import "./videos.css";
import ShowallVideos from "./showallVideos";
export default function Videos() {
  const { videos } = useVideo();
  return (
    <>
      <div className="productcard-container">{videos.map(ShowallVideos)}</div>
    </>
  );
}
