import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./profile.css";
import { UserContext } from "../../App";
import M from "materialize-css";

export default function Profile() {
  const [allImages, setAllImages] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const [image, setImage] = useState("");

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

  useEffect(() => {
    if (image) {
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
            // console.log(data);
            // localStorage.setItem(
            //   "user",
            //   JSON.stringify({ ...state, profileImage: data.url })
            // );
            // dispatch({ type: "PICUPDATE", payload: data.url });
            fetch("http://localhost:2000/updateprofileimage", {
              method: "put",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
              body: JSON.stringify({
                profileImage: data.url,
              }),
            })
              .then((res) => res.json())
              .then((result) => {
                console.log(result);
                localStorage.setItem(
                  "user",
                  JSON.stringify({
                    ...state,
                    profileImage: result.profileImage,
                  })
                );
                dispatch({ type: "PICUPDATE", payload: result.profileImage });
              });
          }
        })
        .catch((err) => {
          M.toast({ html: err });
        });
    }
  }, [image]);
  const uploadHandler = (file) => {
    setImage(file);
  };

  return (
    <div className="main">
      <div className="profile-stats">
        {/* <div className="image"> */}
        <img
          className="image-container"
          src={state ? state.profileImage : ""}
          alt="loading"
        />
        <div className="file-field " style={{ marginTop: "-30px" }}>
          <div className="btn">
            <span>Update profile pic</span>
            <input
              type="file"
              onChange={(e) => uploadHandler(e.target.files[0])}
            />
          </div>
        </div>
        {/* </div> */}
        {/* <div></div> */}
        <h4 style={{ fontFamily: "monospace" }}>{state ? state.name : ""}</h4>
        <h5 style={{ fontFamily: "monospace" }}>{state ? state.email : ""}</h5>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            fontFamily: "monospace",
          }}
        >
          {console.log("allImages", allImages)}
          <h6>{allImages.length} posts</h6>
          <h6>{state ? state.followers.length : ""} followers</h6>
          <h6>{state ? state.following.length : ""} following</h6>
        </div>

        {/* <div className="file-path-wrapper">
            <button
              className="btn waves-effect waves-light btn btn-success mt-3"
              onClick={() => uploadHandler()}
            >
              Update Profile
            </button>
          </div> */}
      </div>
      <hr />
      <div className="gallery">
        {allImages ? (
          allImages.map((image) => {
            console.log("image", image);
            return (
              <Link to={"postdetail/" + image._id}>
                <img key={image._id} src={image.photo} alt="loading" />
              </Link>
            );
          })
        ) : (
          <h1>"loading"</h1>
        )}
      </div>
    </div>
  );
}

//   return (
//     <div className="main">
//       <div className="profile">
//         <div className="image">
//           <img className="image-container" src={image} alt="loading" />
//           <br />

//           <h4>{state ? state.name : "loading"}</h4>
//           <div className="title"></div>
//         </div>

//         <div className="profile-stats">
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               width: "90%",
//               fontFamily: "Times-New-Roman",
//             }}
//           >
//             <h5 className="pt-5">
//               {allImages ? allImages.length : "0"}
//               <br /> posts
//             </h5>
//             <h5 className="pt-5">
//               400 <br />
//               followers
//             </h5>
//             <h5 className="pt-5">
//               100 <br />
//               following
//             </h5>
//           </div>
//         </div>
//       </div>
//       <hr />

//       <div className="gallery">
//         {allImages ? (
//           allImages.map((image) => {
//             document.querySelector(".title").innerHTML = allImages[0].title;
//             return (
//               <img
//                 key={image._id}
//                 src={image.photo}
//                 alt="loading"
//                 style={{
//                   borderRadius: "8px",
//                   display: "flex",
//                   paddingTop: "1rem",
//                 }}
//               />
//             );
//           })
//         ) : (
//           <h1>loading</h1>
//         )}
//       </div>
//     </div>
//   );
// }
