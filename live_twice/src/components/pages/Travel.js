import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import CategoriesSection from "../categories_section";
import Header from "../header";
import Footer from "../Footer";
import './home.css';
export default function Travel() {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:2000/travel", {
      headers: {
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
  
    <div className="main">
      <h4>Travel</h4><section style={{ width: '80%', margin: '1rem auto' }}>
      <div style={{ "display": "flex", "flexWrap": "wrap", "justifyContent": "center", "paddingBottom": "2%" }}>
      {data && data.map((item) => {
        {console.log(item)}
        return ( <>
         <div className="card" style={{ "maxWidth": "48rem" }} key={item._id}>
            <div className="card-body">
               
                <img src={item.photo} onError={(e) => { e.target.onerror = null; e.target.src = 'https://image.freepik.com/free-vector/404-error-web-template-with-cute-dog_23-2147763341.jpg' }}  className="card-img-top" alt={item.imageurl} />
                
                <p className="card-text" style={{textAlign:"left","padding-top":"20px"}}><p data-letters={item.postedBy&&item.postedBy.name. slice(0, 2)}> 
                            {item.postedBy && item.postedBy.name}👑</p>  <div className="card-title">{item.title}
                </div>
                            <div className='wrapper'>
                        
                <p className="card-text demo-1">{item.body}
                </p></div>               </p>
                <div className='delete'>
                {item.postedBy && item.postedBy._id === state._id && (
                <i
                  style={{ display: "inline", cursor: "pointer" }}
                  className="material-icons right"
                  onClick={() => deleteHandler(item._id)}
                >
                  delete
                </i>
              )}</div>
                <hr/>
                <div style={{textAlign:"left"}}>&nbsp;{item.likes.length}&nbsp; 
                <i className="material-icons" style={{ color: "red" }}>
                    favorite
                  </i>&nbsp; {item.likes.includes(state._id) ? (
                  <i className="material-icons" onClick={() => unLikePost(item._id)}style={{ cursor: "pointer" }}>
                    thumb_down
                  </i>
               
              ) : (
                  <i className="material-icons" onClick={() => likePost(item._id)}style={{ cursor: "pointer" }}>
                    thumb_up
                  </i>
              )}&ensp;&ensp;✍&ensp;{item.comments.length}
            </div>

<form onSubmit={(e) => {e.preventDefault(); commentHandler(e.target[0].value, item._id);}}>
<h4>
  <small class="text-muted">Comment here</small>
</h4>
<input type="text" class="form-control" id="inputPassword2" placeholder="comment here"></input>
                </form>
             
              <hr/>
              
              {item.comments.map((comment) => {
                return (<div style={{"display":"flex","flexDirection":"row","justifyContent":"space-between"}}>
                  <div key={comment._id} style={{"paddingBottom":"20px"}}>
                  <p className="card-text" style={{textAlign:"left"}}><p data-letters={comment.postedBy&&comment.postedBy.name. slice(0, 2)}> 
                            {comment.postedBy && comment.postedBy.name}@gmail.com</p></p> 
                    {comment.text}
                           </div>
                   
                    <i style={{ display:"inline",cursor: "pointer" }}className="material-icons"
                      onClick={() => deleteCommentHandler(comment._id)}>
                      delete
                    </i>
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
  })}
  {/* </div> */}
  
</div>
</section>
<Footer/>
</div>
);
}