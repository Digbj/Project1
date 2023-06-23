import React from "react";
import wol from "./icons/Untitled.png";
import { BiLocationPlus } from "react-icons/bi";
import { GiSelfLove } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { BsArrowRightShort, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import sun from "./icons/sun.jpg";
// import Person3 from "./person3";
const Favrouit = () => {
  return (
    <>
      <div className="div5">
        <p id="div5p">Weclome to the world Map</p>
        <h1>. Explore The World With Us Feel Happy Feel Good </h1>
        <p id="div5p1">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.{" "}
        </p>
        <img src={wol} alt="" />
        <div className="div52">
          <div>
            <BiLocationPlus id="R" />
            <span>
              <p id="R1">Location</p>
              <p id="R2">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley
              </p>
            </span>
          </div>
          <div>
            <GiSelfLove id="R" />
            <span>
              <p id="R1">Like it</p>
              <p id="R2">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley
              </p>
            </span>
          </div>
          <div>
            <IoIosPeople id="R" />
            <span>
              <p id="R1">Community</p>
              <p id="R2">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="div6">
        <p id="F">MENGENAL DESTINIZE</p>
        <div className="N">
          <h2>. Galeri Pariwisata & Blog Travel</h2>
          <p id="M">
            Lihat Semua
            <BsArrowRightShort />
          </p>
        </div>
        <div className="div61">
          <div className="left">
            <img src={sun} alt="" />
            <p>23 DECEMBER 2023</p>
            <h3>Tips for Exploring this pkace</h3>
            <p>Lorem Ipsum has been the industry's standard</p>
            <p id="clk">Click Here to Explore</p>
          </div>
          <div className="right">
            <video
              src="https://media.istockphoto.com/id/1336447683/video/flight-over-the-sea-the-endless-horizon-below-us-only-the-blue-depths.mp4?s=mp4-640x640-is&k=20&c=7wIwUnYx_jQKl3rkqkGCjX6LoOYHEOnv6MwLTroNaQ8="
              controls
            />
          </div>
        </div>
      </div>
      <div className="div7">
        <h3>Make ur Trip Memorable</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley
        </p>
        <p>
          <span>Google</span>
          <span>Trending</span>
          <span>New</span>
        </p>
      </div>
      <div className="div8">
        <p id="div5p">Weclome to the Testimonial</p>
        <h2>. Know the People Behind This Great Work </h2>
        <p id="div5p1">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text.{" "}
        </p>
        <div className="card">
          <div>
            <img
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
              alt=""
            />
            <p>Mark Smith</p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <span>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
            </span>
            <Link to="/person1">
              <p>CLick To Know More</p>
            </Link>
          </div>
          <div>
            <img
              src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG.png"
              alt=""
            />
            <p>John Dear</p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <span>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
            </span>
            <Link to="/person2">
              <p>CLick To Know More</p>
            </Link>
          </div>
          <div>
            <img
              src="https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg"
              alt=""
            />
            <p>John Cena</p>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
            <span>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf />
            </span>
            <Link to="/person3">
              <p>CLick To Know More</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Favrouit;
