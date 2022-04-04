import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/posts/postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();
  const titleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const contentInputChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          content,
        })
      );

      setTitle("");
      setContent("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="post-title">Add Title </label>
          <input value={title} name="post-title" onChange={titleInputChange} />
        </div>
        <div>
          <label htmlFor="post-content">Add content </label>
          <input
            value={content}
            name="post-content"
            onChange={contentInputChange}
          />
        </div>
        <button>Add Post</button>
      </form>
    </div>
  );
};

export default AddPostForm;
