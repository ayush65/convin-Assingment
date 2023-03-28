import { createSlice } from "@reduxjs/toolkit";

import { ImageData } from "../../fakeData";

console.log(ImageData);

export const postSlice = createSlice({
  name: "posts",
  initialState: { value: ImageData, gallery: [], history: [] },
  reducers: {
    addImage: (state, action) => {
      state.value.push(action.payload);
    },
    addHistory: (state, action) => {
      state.history.push(action.payload);
    },

    likePost: (state, action) => {
      state.value.map((image) => {
        if (image.id === action.payload.id) {
          image.like = !image.like;
        }
      });
    },

    postsmenu: (state, action) => {
      state.value.map((image) => {
        if (image.id === action.payload.id) {
          image.menu = !image.menu;
        }
      });
    },

    deleteImage: (state, action) => {
      state.value = state.value.filter(
        (image) => image.id !== action.payload.id
      );
    },

    updateImage: (state, action) => {
      state.value.map((image) => {
        console.log("image" + image.image);
        if (image.id === action.payload.id) {
          image.image = action.payload.image;
          console.log(image.image, action.payload.image);
        }
      });
    },
  },
});

export const {
  addImage,
  deleteImage,
  updateImage,
  likePost,
  addHistory,
  postsmenu,
  galleryImages,
} = postSlice.actions;
export default postSlice.reducer;
