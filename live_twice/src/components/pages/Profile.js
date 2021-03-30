import React, { useEffect, useState, useContext } from "react";
import "./profile.css";
import { UserContext } from "../../App";

import image from './../../Unknown_person.jpg';
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
            src={image}
            alt="loading"
          /><br/>
          
          <h4>{state ? state.name : "loading"}</h4>
          <div className='title'></div>
        </div>
        
        <div className="profile-stats">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
              fontFamily: "Times-New-Roman",
            }}
          >
           
            <h5 className='pt-5'>{allImages && allImages.length}<br/> posts</h5>
            <h5 className='pt-5'>400 <br/>followers</h5>
            <h5 className='pt-5'>100 <br/>following</h5>
          </div>
        </div>
      </div>
      <hr />
    
      <div className="gallery">
        {allImages && allImages.map((image) => {
          
document.querySelector('.title').innerHTML = allImages[0].title
          return <img key={image._id} src={image.photo} alt="loading" style={{"borderRadius":"8px","display":"flex","paddingTop":"1rem"}}/>;
        })}



        
      </div>
    </div>
  );
}
