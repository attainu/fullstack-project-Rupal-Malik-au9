import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
export default function Home() {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:2000/allposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.posts);
      });
  }, []);

  const likePost = (id) => {
    fetch("http://localhost:2000/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unLikePost = (id) => {
    fetch("http://localhost:2000/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const commentHandler = (text, postId) => {
    fetch("http://localhost:2000/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        postId,
        text,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteHandler = (postId) => {
    fetch(`http://localhost:2000/deletepost/${postId}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.filter((item) => {
          return item._id !== result._id;
        });
        setData(newData);
      });
  };
  const deleteCommentHandler = (commentId) => {
    fetch(`http://localhost:2000/deletecomment/${commentId}`, {
      method: "delete",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.filter((item) => {
          return item._id !== result._id;
        });
        setData(newData);
      });
  };
  return (
    <>
      <div className="main">
        {console.log("state", state)}
        {console.log("data", data)}
        {data.map((item) => {
          return (
            <div className="card" key={item._id}>
              <h5 className="center">
                {item.postedBy._id === state._id ? (
                  <Link to={"/profile"}>{item.postedBy.name}</Link>
                ) : (
                  <Link to={"/profile/" + item.postedBy._id}>
                    {item.postedBy.name}
                  </Link>
                )}
                {/* <Link to={"/profile/" + item.postedBy._id}>
                  {item.postedBy.name}
                </Link> */}
                {item.postedBy._id === state._id && (
                  <i
                    style={{ display: "inline", cursor: "pointer" }}
                    className="material-icons right"
                    onClick={() => deleteHandler(item._id)}
                  >
                    delete
                  </i>
                )}
              </h5>

              <div className="card-image">
                <img
                  src={item.photo}
                  alt="loading"
                  style={{ height: "90vh", width: "90%", margin: "auto" }}
                />
              </div>
              <div className="card-content">
                {item.likes.includes(state._id) ? (
                  <div>
                    <i className="material-icons" style={{ color: "red" }}>
                      favorite
                    </i>
                    <i
                      className="material-icons"
                      onClick={() => unLikePost(item._id)}
                      style={{ cursor: "pointer" }}
                    >
                      thumb_down
                    </i>
                  </div>
                ) : (
                  <div>
                    <i className="material-icons" style={{ color: "wheat" }}>
                      favorite
                    </i>
                    <i
                      className="material-icons"
                      onClick={() => likePost(item._id)}
                      style={{ cursor: "pointer" }}
                    >
                      thumb_up
                    </i>
                  </div>
                )}

                <p>{item.likes.length} likes</p>
                <h5>{item.title}</h5>
                <h6>{item.subTitle}</h6>
                <p>{item.body}</p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    commentHandler(e.target[0].value, item._id);
                  }}
                >
                  <input type="text" placeholder="Comment here" />
                </form>
                <h5>Comment Section</h5>
                <hr></hr>
                {item.comments.map((comment) => {
                  return (
                    <h6 key={comment._id}>
                      <span style={{ fontWeight: "bold" }}>
                        {comment.postedBy.name}{" "}
                      </span>
                      {comment.text}
                      <i
                        style={{ display: "inline", cursor: "pointer" }}
                        className="material-icons right"
                        onClick={() => deleteCommentHandler(item._id)}
                      >
                        delete
                      </i>
                    </h6>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
