"use client";
import MediaGallery from "../components/MediaGallery";
import media from "../data/media";

export default function Home() {
  return (
    <div>
      <h1>Đậu Đậu ngôk 🌷</h1>
      <MediaGallery media={media} />
    </div>
  );
}
