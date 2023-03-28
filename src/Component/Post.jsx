import { useState, useRef } from "react";
import { addImage } from "../redux/reducer/postsReducer";
import { useSelector, useDispatch } from "react-redux";
import "./Posts.css";

import { ImCross } from "react-icons/im";

const Post = () => {
  const [imagePreview, setImagePreview] = useState("");

  const [description, setdescription] = useState("");

  const [audio, setAudio] = useState("");

  const dispatch = useDispatch();
  const imageList = useSelector((state) => state.posts.value);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleImageChange = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="post-container">
        <button className="btn-open-modal" onClick={handleShow}>
          Upload Song
        </button>
        <div className={`modal ${show ? "show" : ""}`}>
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              <ImCross />
            </span>
            <input type="file" onChange={handleImageChange} accept="image/*" />
            <br />
            <br />

            <select value={selectedOption} onChange={handleOptionChange}>
              <option value="">Select an option</option>
              <option value="https://www.bensound.com/bensound-music/bensound-adventure.mp3">
                Song 1
              </option>
              <option value="https://www.bensound.com/bensound-music/bensound-photoalbum.mp3">
                Song 2
              </option>
              <option value="https://www.bensound.com/bensound-music/bensound-november.mp3">
                Song 3
              </option>
            </select>
            {selectedOption && <div>You selected {selectedOption}</div>}

            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                width="300"
                height="200"
                className="img-preview"
              />
            )}
            <div className="adduser-div">
              <input
                className="post-input"
                type="text"
                placeholder="description..."
                onChange={(event) => {
                  setdescription(event.target.value);
                }}
              />
              <button
                className="add-img-btn"
                onClick={() => {
                  console.log(imageList);
                  if (imagePreview === "" || description === "") {
                    alert("please provide proper details");
                  } else {
                    if (imageList.length === 0) {
                      dispatch(
                        addImage({
                          id: 1,
                          description,
                          like: false,
                          image: imagePreview,
                          audio: selectedOption ,
                        })
                      );
                    } else {
                      dispatch(
                        addImage({
                          id: imageList[imageList.length - 1].id + 1,
                          description,
                          like: false,
                          image: imagePreview,
                          audio: selectedOption,
                        })
                      );
                    }
                  }
                }}
              >
                {" "}
                Add Card
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
