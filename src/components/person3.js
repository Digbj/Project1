import React from "react";
import {BsInstagram,BsFacebook } from "react-icons/bs";
const Person3=()=>{
    return(
        <div className="person">
         <div className="head">
         <p>John Cena</p>
         </div>
         <div className="profile">
         <img src="https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg" alt=""/>
         </div>
         <div className="skill">
            <div className="pro1">
                <h3>Education</h3>
                <p>Graduate</p>
                <h3>University</h3>
                <p>Delhi University</p>
                <h3>Address</h3>
                <p>Punjab</p>
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
export default Person3;
