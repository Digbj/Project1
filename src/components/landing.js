import React from "react";
import { GiCommercialAirplane, GiPalmTree } from "react-icons/gi";
import {
  BsArrowRightShort,
  BsHandThumbsUp,
  BsSearch,
  BsPencil,
} from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import jet from "./icons/jetstar.png";
import air from "./icons/air-india.png";
import thai from "./icons/thai.png";
import exp from "./icons/expedia.png";
import qua from "./icons/quanta-club.png";
import pic from "./icons/pic.png";
import img1 from "./icons/img1.jpeg";
import img2 from "./icons/image2.jpeg";
import img3 from "./icons/image3.jpeg";
import img4 from "./icons/image4.jpeg";
import sun from "./icons/sun.jpg";

import { BiHappyHeartEyes } from "react-icons/bi";
import Favrouit from "./fav";
import Footer from "./footer";
// import Person1 from "./person1";
const Main = () => {
  return (
    <>
      <div className="container">
        <div className="text">
          <div className="air">
            <GiCommercialAirplane id="air" />
            <span> .Explore the wonderful Indonesia!</span>
          </div>
          <div>
            <h1>
              Liburan & nikmati <div id="A">Tempat baru</div>di Indonesia{" "}
              <span>
                <GiPalmTree id="palm" />
              </span>
            </h1>
          </div>
          <div className="para">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </div>
          <div className="B">
            <button className="btn">
              Mulai Sekrang{" "}
              <span>
                <BsArrowRightShort />
              </span>
            </button>
            <AiOutlinePlayCircle id="play" />
          </div>
        </div>
        <div className="pic">
          <img src={pic} alt="" />
        </div>
      </div>
      <div className="jet">
        <img src={jet} alt="" />
        <img src={air} alt="" />
        <img src={thai} alt="" />
        <img src={exp} alt="" />
        <img src={qua} alt="" />
      </div>
      <div className="fav">
        <p id="F">FAVOURIT DESTINATION</p>
        <div className="N">
          <h2>
            <GiCommercialAirplane />. Temukan Destinasi Favoritmu
          </h2>
          <p id="M">
            Lihat Semua
            <BsArrowRightShort />
          </p>
        </div>
        <div className="images">
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
        </div>

        <div className="div4">
          <p id="S">FAVOURIT DESTINATION</p>
          <div className="G">
            <div className="div41">
              <h2>Gak mau nagantri?</h2>
              <h2>
                resrvasi aja? <BsHandThumbsUp id="up" />
              </h2>
              <div className="L">
                <div>
                  <BsSearch id="Q" />
                  <span>
                    <p id="p1">Search</p>
                    <p id="p2">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley
                    </p>
                  </span>
                </div>
                <div>
                  <BsPencil id="Q" />
                  <span>
                    <p id="p1">Write</p>
                    <p id="p2">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley
                    </p>
                  </span>
                </div>
                <div>
                  <BiHappyHeartEyes id="Q" />
                  <span>
                    <p id="p1">Explore</p>
                    <p id="p2">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley
                    </p>
                  </span>
                </div>
              </div>
            </div>

            <div className="div42">
              <img src={sun} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Favrouit />
      <Footer />
    </>
  );
};
export default Main;
