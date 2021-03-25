import React, { useState, useEffect } from "react";
import M from "materialize-css";
import { useHistory } from "react-router-dom";

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
    data.append("upload_preset", "insta-clone");
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
      <div className="card ">
        <div className="input-field">
          <input
            // placeholder="Enter title of the post here"
            id="title"
            type="text"
            className="validate"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label htmlFor="title">Title </label>
        </div>
        <div className="input-field">
          <input
            // placeholder="Enter subtitle of the post here"
            id="subTitle"
            type="text"
            className="validate"
            value={subTitle}
            onChange={(e) => {
              setSubTitle(e.target.value);
            }}
          />
          <label htmlFor="subTitle">SubTitle</label>
        </div>

        <div className="input-field">
          <input
            // placeholder="Enter content of the post here"
            id="content"
            type="text"
            className="validate"
            value={content}
            onChange={(e) => {
              setcontent(e.target.value);
            }}
          />
          <label htmlFor="content">Content</label>
        </div>

        <div className="file-field ">
          <div className="btn">
            <span>Upload</span>
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
            <button
              className="btn waves-effect waves-light right"
              onClick={() => uploadHandler()}
            >
              Upload Post
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
