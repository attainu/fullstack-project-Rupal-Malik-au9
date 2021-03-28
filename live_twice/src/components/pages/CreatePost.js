import React, { useState, useEffect } from "react";
import M from "materialize-css";

import image2 from './../../Footer_01.jpg';
import { Link, useHistory } from "react-router-dom";

export default function CreatePost() {
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setcontent] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (url) {
      fetch("http://localhost:2000/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          title,
          subTitle,
          photo: url,
          body: content,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.err) {
            M.toast({ html: data.err, classes: "rounded" });
          } else {
            M.toast({ html: "Post created successfully", classes: "rounded" });
            history.push("/");
          }
        });
    }
  }, [url]);

  const uploadHandler = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "live-twice");
    data.append("cloud_name", "deepender");
    fetch("https://api.cloudinary.com/v1_1/deepender/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.err) {
          M.toast({ html: data.err, classes: "rounded" });
        } else {
          setUrl(data.url);
        }
      })
      .catch((err) => {
        M.toast({ html: err });
      });
  };

  return (

    
    <div className="main">
      <div className="card form-control" style={{"display":"flex","flexDirection":"row"}}>
      <img class="col-lg-6 pl-3" src={image2} alt="register-image" />
      <div className="left-image p-4" style={{"width":"50rem"}}>
        <h2>Write Your Memories Down <br/>Before They’re Gone Forever</h2>
        <div className='text-content p-3'>We hear it all the time: people we know getting older, their memory slipping through their fingers like sand; each grain another moment, another time in their life forgotten.</div>
        <div className="input-field form-group">
        <label htmlFor="title">Title </label>
          <input
            id="title"
            type="text"
            className="validate form-control"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
         
        </div>
        <div className="input-field form-group">
        <label htmlFor="subTitle">SubTitle</label>
          <input
            id="subTitle"
            type="text"
            className="validate form-control"
            value={subTitle}
            onChange={(e) => {
              setSubTitle(e.target.value);
            }}
          />
        
        </div>

        <div className="input-field form-group">
        <label htmlFor="content">Content</label>
          <input
            id="content"
            type="text"
            className="validate form-control"
            value={content}
            onChange={(e) => {
              setcontent(e.target.value);
            }}
          />
        </div>
                  
                  
                    <div className="file-field ">
          <div className="btn">
            <span>Upload</span>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate form-control" type="text" />
            <button
              className="btn waves-effect waves-light btn btn-success mt-3"
              onClick={() => uploadHandler()}
            >
              Upload Post
            </button>
            </div>
        </div>
      </div>
      </div>
   
                   {/* <ul class="bg-bubbles">
                <li className="bubbles blue"></li>
              <li className="bubbles red"></li>
              <li className="bubbles blue"></li>
              <li className="bubbles"></li>
              <li className="bubbles blue"></li>
              <li className="bubbles red"></li>
            </ul>  */}
            </div>
               
                
              

              )}
            



     
