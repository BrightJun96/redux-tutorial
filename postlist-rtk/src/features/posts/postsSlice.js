import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "First Post", content: "Hello" },
  { id: 2, title: "Second Post", content: "World" },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload);
    },
  },
});

export const postsSelector = (state) => state.posts;

export const { addPost } = postsSlice.actions;
const postsReducer = postsSlice.reducer;

export default postsReducer;
