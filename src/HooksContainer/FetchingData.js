import React, { useState, useEffect } from "react";
import axios from "axios";

function FetchingData() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);
  const handleClick = () => {
    setIdFromButton(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, [idFromButton]);
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <button type="button" onClick={() => handleClick()}>
        Fetch Data
      </button>
      {posts.title}
      {/* {posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })} */}
    </div>
  );
}

export default FetchingData;
