"use client";
import MediaGallery from "../components/MediaGallery";
import media from "../data/media";
import Starfield from "react-starfield";
export default function Home() {
  return (
    <div>
      <main className="main">
        <div className="mainDiv">
          <h1 className="bigTitle">
            <span className="welcomeTexjt">Chào mừng tới </span> thế giới của
            Đậu Đậu🌷{" "}
          </h1>
          <div className="line" />
          <h1 style={{ color: "white" }}>Đậu Đậu ngôk 🌷</h1>
          <MediaGallery media={media} />
        </div>
      </main>
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.1}
        backgroundColor="black"
      />
    </div>
  );
}
