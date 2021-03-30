import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import ReadMoreReact from "read-more-react";
export default function FollowingPost() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const { state } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:2000/followerspost", {
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

  const suggestedUsers = () => {
    fetch("http://localhost:2000/allusers", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("user" + result.user);
        setUsers(result.user);
      });
  };

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
        <section style={{ width: "80%", margin: "1rem auto" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              paddingBottom: "2%",
            }}
          >
            {console.log("state", state)}
            {console.log("data", data)}
            {data.length !== 0 ? (
              data
                .slice(0)
                .reverse()
                .map((item) => {
                  return (
                    <>
                      <div
                        className="card"
                        style={{ width: "48rem" }}
                        key={item._id}
                      >
                        <div className="card-body">
                          <img
                            style={{ width: "100%", height: "auto" }}
                            src={item.photo}
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://i.pinimg.com/originals/30/8a/ae/308aae03d136948294661f967b7c0323.gif";
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
                            </p>{" "}
                            <div className="card-title">{item.title}</div>
                            <div className="wrapper">
                              <p className="card-text demo-1">
                                <ReadMoreReact
                                  text={item.body ? item.body : ""}
                                  min={0}
                                  ideal={50}
                                  max={500}
                                  readMoreText="click here to read more"
                                />
                              </p>
                            </div>{" "}
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
                                          // <h6
                                          //   style={{
                                          //     display: "inline",
                                          //     fontWeight: "bolder",
                                          //   }}
                                          // >
                                          <Link
                                            to={
                                              "/profile/" + comment.postedBy._id
                                            }
                                          >
                                            {" "}
                                            {comment.postedBy.name}
                                          </Link>
                                          // </h6>
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

                      {/* <div className="card" key={item._id} style={styles.pin}>
        <div className="center" style={{"fontSize":"20px"}}>
      {item.title}
     
      </div>
       <img className='imag' src={item.photo} alt="loading" style={{"width":"100%","height":"100%","objectFit":"fill"}}/>
           {/* {item.postedBy.name}{" "}  */}

                      {/* <h5>{item.title}</h5> */}
                      {/* <h6>{item.subTitle}</h6>
          <p>{item.body}</p>  */}
                      {/* <form onSubmit={(e) => { e.preventDefault(); commentHandler(e.target[0].value, item._id);}}>
            <input type="text" placeholder="Comment here" />
          </form>
          <h5>Comment Section</h5>
          <hr></hr> 
           {item.comments.map((comment) => {
            return (
              <div key={comment._id}>
                <span style={{ fontWeight: "bold" }}>
                  {comment.postedBy.name}{" "}
                </span>
                {comment.text}
                <i style={{ display: "inline", cursor: "pointer" }} className="material-icons right"  onClick={() => deleteCommentHandler(item._id)}>
                  delete
                </i>
              </div>
            );
          })} */}

                      {/* </div> */}
                    </>
                  );
                })
            ) : (
              <center>
                <h1>No post or follow someone</h1>
                {/* <button
                  onClick={() => {
                    suggestedUsers();
                  }}
                >
                  Click here to see suggested users
                </button>
                <div
                  style={{
                    height: "50vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                  }}
                >
                  {users &&
                    users.slice(0, 5).map((user) => (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={user.profileImage}
                          style={{
                            borderRadius: "50%",
                            width: "8vh",
                            height: "8vh",
                          }}
                        />
                        <Link to={"/profile/" + user._id}>
                          <div>{user.name}</div>
                        </Link>
                      </div>
                    ))}
                </div> */}
              </center>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
