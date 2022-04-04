import React from "react";
import { useSelector } from "react-redux";
import { postsSelector } from "./../features/posts/postsSlice";

const PostList = () => {
  const posts = useSelector(postsSelector);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <section>
        <h2 style={{ marginBottom: "3rem" }}>posts</h2>
        {posts.map((post) => (
          <article key={post.id} style={{ marginBottom: "1rem" }}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default PostList;
