import {
  deleteImage,
  updateImage,
  addHistory,
  likePost,
  postsmenu,
} from "../redux/reducer/postsReducer";
import { ImCross } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import "./Posts.css";
import { AiOutlineHeart, AiFillHeart, AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const ImagePosts = () => {
  const dispatch = useDispatch();
  const imageList = useSelector((state) => state.posts.value);
  const historyData = useSelector((state) => state.posts.history);
  const audioRef = useRef(null);
  const [imageset, setImage] = useState("");

  const handleImageUpdateChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [isPlaying, setIsPlaying] = useState(true);

  const [audioModal, setAudioModal] = useState([]);

  return (
    <div className="image-post-container">
      <div className="display-images">
        {imageList.map((image, index) => {
          return (
            <div
              key={image.id}
              className="post-main-div"
              onMouseEnter={() => {
                dispatch(postsmenu({ id: image.id }));
              }}
              onMouseLeave={() => {
                dispatch(postsmenu({ id: image.id }));
                setAudioModal([]);
              }}
            >
              <button
                className="play-btn"
                onClick={() => {
                  setAudioModal(image);
                  console.log(audioModal);
                  console.log("clikced");
                  handleShow();
                  const myElement = historyData.filter(
                    (obj) => obj.id === image.id
                  );

                  console.log(myElement);

                  if (myElement.length > 0) {
                  } else {
                    dispatch(
                      addHistory({
                        id: image.id,
                        description: image.description,
                        like: false,
                        image: image.image,
                      })
                    );
                  }
                }}
              >
                Play Audio
              </button>

              <div className={`modal ${show ? "show" : ""}`}>
                <div className="modal-content">
                  <span className="close" onClick={handleClose}>
                    <ImCross />
                  </span>
                  <img
                    src={audioModal.image}
                    alt="Preview"
                    className="post-img-modal"
                  />
                  <AudioPlayer
                    style={{ width: "300px" }}
                    src={audioModal.audio}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    isPlaying={isPlaying}
                    header={audioModal.description}
                  />
                </div>
              </div>

              {image.menu && (
                <h1 className="post-desc"> {image.description}</h1>
              )}

              <img src={image.image} alt="Preview" className="post-img" />
              {image.menu && (
                <>
                  {" "}
                  {image.like ? (
                    <>
                      {" "}
                      <button
                        onClick={() => {
                          dispatch(likePost({ id: image.id }));
                        }}
                        className="post-button btn-like"
                      >
                        {" "}
                        <AiFillHeart />
                      </button>
                    </>
                  ) : (
                    <>
                      {" "}
                      <button
                        onClick={() => {
                          dispatch(likePost({ id: image.id }));
                        }}
                        className="post-button btn-like"
                      >
                        {" "}
                        <AiOutlineHeart />
                      </button>
                    </>
                  )}
                </>
              )}

              {image.menu && (
                <>
                  {" "}
                  <input
                    type="file"
                    onChange={handleImageUpdateChange}
                    className="post-button btn-choose-file"
                    accept="image/*"
                  />
                  <button
                    className="post-button btn-update"
                    onClick={() => {
                      if (imageset === "") {
                        alert("please choose the file then edit the post");
                      } else {
                        dispatch(
                          updateImage({ id: image.id, image: imageset })
                        );
                      }
                    }}
                  >
                    {" "}
                    <GrUpdate />
                  </button>
                </>
              )}
              {image.menu && (
                <>
                  {" "}
                  <button
                    className="post-button btn-delete"
                    onClick={() => {
                      dispatch(deleteImage({ id: image.id }));
                    }}
                  >
                    <AiFillDelete />
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagePosts;
