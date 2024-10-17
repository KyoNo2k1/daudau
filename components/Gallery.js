// components/Gallery.js
import styled from "styled-components";

const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const MediaItem = styled.div`
  flex: 1 1 300px;
  max-width: 300px;
  background: #f5f5f5;
  padding: 10px;
  border: 1px solid #e0e0e0;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  controls: true;
`;

export default function Gallery({ media }) {
  return (
    <GalleryWrapper>
      {media.map((item, index) => (
        <MediaItem key={index}>
          {item.type === "image" ? (
            <Image src={item.src} alt={item.alt} />
          ) : (
            <Video src={item.src} alt={item.alt} controls />
          )}
        </MediaItem>
      ))}
    </GalleryWrapper>
  );
}
