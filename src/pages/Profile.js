import React from "react";
import "./profile.css";

export default function Profile() {
  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
      <div className="main">
        <div className="imageContainer">
          <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="profileContainer">
          <h4>Deeps Rana</h4>
          <div className="userData">
            <h5>40 posts</h5>
            <h5>40 followers</h5>
            <h5>40 followings</h5>
          </div>
        </div>
      </div>
      <div className="content">
        <img
          className="item"
          src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
  );
}
