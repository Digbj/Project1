import React from "react";

import {BsInstagram,BsFacebook } from "react-icons/bs";
const Person1=()=>{
    return(
        <div className="person">
         <div className="head">
         <p>Mark Smith</p>
         </div>
         <div className="profile">
         <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png" alt=""/>
         </div>
         <div className="skill">
            <div className="pro1">
                <h3>Education</h3>
                <p>Graduate</p>
                <h3>University</h3>
                <p>Delhi University</p>
                <h3>Address</h3>
                <p>South Delhi</p>
            </div>
            <div className="prof2">
                <div>
                    <h3>Specialization</h3>
                    <ul>
                        <li>Photo shop</li>
                        <li>Microsoft Office</li>
                        <li>Mx Flash</li>
                    </ul>
                </div>
                <div>
                    <h3>Skills</h3>
                    <ul>
                        <li>This book is a treatise on the theory of ethics, very popular during the Renaissance.</li>
                        <li>This book is a treatise on the theory of ethics, very popular during the Renaissance.</li>
                        <li>This book is a treatise on the theory of ethics, very popular during the Renaissance.</li>
                    </ul>
                </div>
                <div>
                    <h3>Tools</h3>
                    <ul>
                        <li>
                        This book is a treatise on the theory of ethics, very popular during the Renaissance.
                        </li>
                        <li>This book is a treatise on the theory of ethics, very popular during the Renaissance.</li>
                        <li>This book is a treatise on the theory of ethics, very popular during the Renaissance.</li>
                    </ul>
                </div>
            </div>
         </div>
         <div className="social">
         <a href='https://www.instagram.com/'><BsInstagram id="WW"/></a> 
         <a href='https://www.facebook.com/'><BsFacebook id="WW"/></a>
         </div>
        </div>
    )
}
export default Person1;
