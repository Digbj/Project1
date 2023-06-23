import React from "react";
import { FaGlobeAsia, FaSearch, FaGlobe } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { RiDeleteBin6Line} from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
const Navigation = () => {
  return (
    <div className="nav">
      <div className="div1">
        <div>
          <FaGlobeAsia id="logo"/>
          <span id='name'>Destinize</span>
        </div>
        <div className="search">
          <FaSearch />
          <input id="inp" placeholder="Search Your Destination" />
        </div>
        <div className="glo">
          <FaGlobe />
          <select>
            <option>Language</option>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
        <div className="loc">
          <GrLocation id="lo" />
          <span id="locc">
            <p>Location</p>
            <select>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Kolkata</option>
            </select>
          </span>
        </div>
        
      </div>
      <hr></hr>
      <div className="div2">
        <div className="div21">
        <div >
        <select>
              <option>Menu</option>
              <option>ABC</option>
              <option>DEF</option>
              <option>GHI</option>
            </select>
        </div>
        <div>
        <select>
              <option>Service</option>
              <option>ABC</option>
              <option>DEF</option>
              <option>GHI</option>
            </select>
        </div>
        <div>
        <select>
              <option>Profile</option>
              <option>ABC</option>
              <option>DEF</option>
              <option>GHI</option>
            </select>
        </div>
        <div>
        <select>
              <option>Flight</option>
              <option>ABC</option>
              <option>DEF</option>
              <option>GHI</option>
            </select>
        </div>
        <div>
        <select>
              <option>Hotel</option>
              <option>ABC</option>
              <option>DEF</option>
              <option>GHI</option>
            </select>
        </div>
        <div>
        <select>
              <option>Near By</option>
              <option>ABC</option>
              <option>DEF</option>
              <option>GHI</option>
            </select>
        </div>
        <div>
        <select>
              <option>Food</option>
              <option>ABC</option>
              <option>DEF</option>
              <option>GHI</option>
            </select>
        </div>
        <div>
        <select>
              <option>Bookings</option>
              <option>ABC</option>
              <option>DEF</option>
              <option>GHI</option>
            </select>
        </div>
        <div>
        <select>
              <option>Contacts</option>
              <option>ABC</option>
              <option>DEF</option>
              <option>GHI</option>
            </select>
        </div>
        </div>
       
        <div className="div22">
            <span><RiDeleteBin6Line id="bin"/></span>
            <span><AiOutlineUser id="user"/></span>


        </div>
      </div>
      
    </div>
  );
};
export default Navigation;
