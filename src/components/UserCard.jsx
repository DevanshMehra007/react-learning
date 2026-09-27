import React from "react";
import Devpic from '../assets/Devpic.jpg'
import "./UserCard.css"
const UserCard =() => {

    return (
        <div className='user-container'>
            <p id="user-name">Dev</p>
            <img id="user-img" src={Devpic} alt="dev" height={"200px"}/>
            <p id="user-desc">Description of dev</p>


        </div>
    )
}
export default UserCard;