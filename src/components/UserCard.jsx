import React from "react";
import Devpic from '../assets/Devpic.jpg'
import "./UserCard.css"
const UserCard = (props) => {

    return (
        <div className='user-container'>
            <p id="user-name">{props.name}</p>
            <img id="user-img" src={Devpic} alt="dev" height={"200px"}/>
            <p id="user-desc">{props.desc}</p>


        </div>
    )
}
export default UserCard;