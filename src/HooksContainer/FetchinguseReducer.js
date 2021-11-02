import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  data: {},
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCHING SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FETCHING FAILED":
      return {
        loading: false,
        data: {},
        error: "Something went wrong",
      };
    default:
      return state;
  }
};
function FetchinguseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        dispatch({ type: "FETCHING SUCCESS", payload: res.data });
      })
      .catch((err) => dispatch({ type: "FETCHING FAILED" }));
  });
  return (
    <div>
      {state.loading ? "Loading" : state.data.title}
      {state.error ? state.error : null}
    </div>
  );
}

export default FetchinguseReducer;
