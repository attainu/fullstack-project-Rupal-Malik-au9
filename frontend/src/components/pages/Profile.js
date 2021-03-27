import React, { useEffect, useState, useContext } from "react";
import "./profile.css";
import { UserContext } from "../../App";

export default function Profile() {
  const [allImages, setAllImages] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  // console.log(state);
  useEffect(() => {
    fetch("http://localhost:2000/mypost", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result.post);
        setAllImages(result.post);
      });
  }, []);

  return (
    <div className="main">
      <div className="profile">
        <div className="image">
          <img
            className="image-container"
            src="https://scontent.fblr1-4.fna.fbcdn.net/v/t1.0-1/c0.0.240.240a/p240x240/150731703_2126302530834572_6279094349487041189_o.jpg?_nc_cat=105&ccb=1-3&_nc_sid=7206a8&_nc_ohc=bzgYQ8yBWeoAX--Ar9o&_nc_ht=scontent.fblr1-4.fna&tp=27&oh=366612f240f41096e56bf9e3d059e3d8&oe=60797D92"
            alt="loading"
          />
        </div>
        <div className="profile-stats">
          <h4 style={{ fontFamily: "monospace" }}>{state ? state.name : ""}</h4>
          <h5 style={{ fontFamily: "monospace" }}>
            {state ? state.email : ""}
          </h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              fontFamily: "monospace",
            }}
          >
            <h6>{allImages.length} posts</h6>
            <h6>{state ? state.followers.length : ""} followers</h6>
            <h6>{state ? state.following.length : ""} following</h6>
          </div>
        </div>
      </div>
      <hr />
      <div className="gallery">
        {allImages.map((image) => {
          return <img key={image._id} src={image.photo} alt="loading" />;
        })}
      </div>
    </div>
  );
}
