import React from "react";
import useFetch from "../hooks/useFetch";
import PostItem from "./PostItem";

function PostList() {
  const { data: posts, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {posts.map((post) => (

      ))}
    </ul>
  );
}

export default PostList;
