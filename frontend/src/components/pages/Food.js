import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";

import Header from "../header";
import Footer from "../Footer";
import "./home.css";
import { Link } from "react-router-dom";
import ReadMoreReact from "read-more-react";
export default function Food() {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:2000/food", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.posts);
        setData(result.posts);
      });
  }, []);

  const likePost = (id) => {
    fetch("http://localhost:2000/likefood", {
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
    fetch("http://localhost:2000/unlikefood", {
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
    fetch("http://localhost:2000/commentfood", {
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
    fetch(`http://localhost:2000/deletepostfood/${postId}`, {
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
    <div className="main">
      <Header />
      {/* <CategoriesSection /> */}
      <section style={{ width: "80%", margin: "1rem auto" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            paddingBottom: "2%",
          }}
        >
          {data ? (
            data
              .slice(0)
              .reverse()
              .map((item) => {
                {
                  console.log(item);
                  console.log("state", state);
                }
                return (
                  <>
                    <div
                      className="card"
                      style={{ width: "48rem" }}
                      key={item._id}
                    >
                      <div className="card-body">
                        <img
                          src={item.photo}
                          style={{ width: "100%", height: "70vh" }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://image.freepik.com/free-vector/404-error-web-template-with-cute-dog_23-2147763341.jpg";
                          }}
                          className="card-img-top"
                          alt={item.imageurl}
                        />

                        <p
                          className="card-text"
                          style={{ textAlign: "left", "padding-top": "20px" }}
                        >
                          <p data-letters={item.postedBy.name.slice(0, 2)}>
                            {item.postedBy._id === state._id ? (
                              <Link to={"/profile"}>
                                {item.postedBy.name}👑
                              </Link>
                            ) : (
                              <Link to={"/profile/" + item.postedBy._id}>
                                {item.postedBy.name}👑
                              </Link>
                            )}
                          </p>
                          <div className="card-title">{item.title}</div>
                          <div className="wrapper">
                            <p className="card-text demo-1">
                              <ReadMoreReact
                                text={item.body ? item.body : ""}
                                min={0}
                                ideal={50}
                                max={500}
                                readMoreText="click here to read more"
                                color="red"
                              />
                            </p>
                          </div>
                        </p>
                        <div className="delete">
                          {item.postedBy._id === state._id && (
                            <i
                              style={{ display: "inline", cursor: "pointer" }}
                              className="material-icons right"
                              onClick={() => deleteHandler(item._id)}
                            >
                              delete
                            </i>
                          )}
                        </div>
                        <div className="thumbs">
                          {item.likes.includes(state._id) ? (
                            <div>
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
                              {/* <i
                              className="material-icons"
                              style={{ color: "wheat" }}
                            >
                              favorite
                            </i> */}
                              <i
                                className="material-icons"
                                onClick={() => likePost(item._id)}
                                style={{ cursor: "pointer" }}
                              >
                                thumb_up
                              </i>
                            </div>
                          )}
                        </div>

                        <hr />
                        <div style={{ textAlign: "left" }}>
                          <i
                            className="material-icons"
                            style={{ color: "red" }}
                          >
                            favorite
                          </i>
                          &nbsp;{item.likes.length}&ensp;&ensp;✍&ensp;
                          {item.comments.length}
                        </div>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            commentHandler(e.target[0].value, item._id);
                            e.target[0].value = "";
                          }}
                        >
                          <h4>
                            <small class="text-muted">Comment here</small>
                          </h4>
                          <input
                            type="text"
                            class="form-control"
                            id="inputPassword2"
                            placeholder="comment here"
                          ></input>
                        </form>

                        {item.comments
                          .slice(0)
                          .reverse()
                          .map((comment) => {
                            return (
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  justifyContent: "space-between",
                                }}
                              >
                                <div
                                  key={comment._id}
                                  style={{
                                    paddingBottom: "20px",
                                  }}
                                >
                                  <p
                                    className="card-text"
                                    style={{
                                      textAlign: "left",
                                      display: "inline",
                                    }}
                                  >
                                    <p
                                      style={{ display: "inline" }}
                                      data-letters={
                                        comment.postedBy &&
                                        comment.postedBy.name.slice(0, 2)
                                      }
                                    >
                                      {comment.postedBy && (
                                        <Link
                                          to={
                                            "/profile/" + comment.postedBy._id
                                          }
                                        >
                                          {" "}
                                          {comment.postedBy.name}
                                        </Link>
                                      )}
                                    </p>
                                  </p>{" "}
                                  {comment.text}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </>
                );
              })
          ) : (
            <h1>Login or signup to continue</h1>
          )}
        </div>
        {/* <Link to="/createfoodpost">
          <button
            className="btn"
            style={{ position: "fixed", bottom: "5vh", right: "5vh" }}
          >
            Add Post
          </button>
        </Link> */}
      </section>
      <Footer />
    </div>
  );
}
