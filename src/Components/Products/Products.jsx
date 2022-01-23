import "./Products.css";
import { NavLink } from "react-router-dom";
import explorationVideo from "../videos/production ID_5055608.mp4";
import img1 from "../images/kT1yJX5.jpg";
import img2 from "../images/pexels-anamul-rezwan-1145434.jpg";
import img3 from "../images/pexels-athena-3417668.jpg";
import img4 from "../images/pexels-lalesh-aldarwish-147635.jpg";
import img5 from "../images/pexels-mitchell-luo-3685210 (1).jpg";
import img6 from "../images/pexels-vedanti-242616.jpg";
import img7 from "../images/pexels-väinö-parjanen-3853870.jpg";
import img8 from "../images/pexels-pixabay-327049.jpg";
import img9 from "../images/pexels-pixabay-266896.jpg";
import img10 from "../images/pexels-pixabay-220237.jpg";
import img11 from "../images/pexels-pixabay-73833.jpg";
import img12 from "../images/pexels-pixabay-327041.jpg";

import { useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
export default function Products(props) {
  const [imgsArr, setimgsArr] = useState([
    { img: img1, title: "اكتب الصورة 1" },
    { img: img2, title: "اكتب الصورة 2" },
    { img: img3, title: "اكتب الصورة 3" },
    { img: img4, title: "اكتب الصورة 4" },
    { img: img5, title: "اكتب الصورة 5" },
    { img: img6, title: "اكتب الصورة 6" },
    { img: img7, title: "اكتب الصورة 7" },
    { img: img8, title: "اكتب الصورة 8" },
    { img: img9, title: "اكتب الصورة 9" },
    { img: img10, title: "اكتب الصورة 10" },
    { img: img11, title: "اكتب الصورة 11" },
    { img: img12, title: "اكتب الصورة 12" },
  ]);
  return (
    <>
      <div className="exploration-intro">
        <Navbar logOut={props.logOut} />
        <video
          className="w-100"
          autoPlay
          muted
          src={explorationVideo}
          type="video/mp4"
        ></video>
        <div className="intro-text">
          <h2 className="fs-sm-4">
            Welcome To <span className="main-color">Website</span>
          </h2>
          <p>
            We’re an architectural metal company that makes and installs
            building facades, decorative exteriors, custom railing, and really
            anything architectural you can imagine with metal.
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          {imgsArr.map((item) => (
            <div className="col-sm-12 col-md-4 col-lg-3 explore-item">
              <div
                style={{ backgroundColor: "#333" }}
                className="item text-center  text-light"
              >
                <img
                  className=" w-100 "
                  height="300px"
                  src={item.img}
                  alt="not found "
                />
              </div>
              <div>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
