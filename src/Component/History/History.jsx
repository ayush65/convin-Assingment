import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "./History.css";

const History = () => {
  const dispatch = useDispatch();
  const historyData = useSelector((state) => state.posts.history);
  console.log(historyData);
  return (
    <>
      <Navbar />
      <div className="history-container">
        {historyData.map((item) => {
          return (
            <div key={item.id} className="history-card">
              <img src={item.image} alt="Preview" className="post-img" />
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default History;
