import "./Gallery.css";
import { useSelector } from "react-redux";

const Gallery = () => {
  const imageList = useSelector((state) => state.posts.gallery);

  return (
    <>
      <div className="gallery-container web-view">
        {imageList.slice(0, 18).map((item) => {
          return (
            <div key={item.id}>
              <img
                alt="item-img"
                src={item.urls.full}
                className="gallery-img"
              />
            </div>
          );
        })}
      </div>
      <div className="gallery-container mobile-view">
        {imageList.slice(0, 2).map((item) => {
          return (
            <div key={item.id}>
              <img
                alt="item-img"
                src={item.urls.full}
                className="gallery-img"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
