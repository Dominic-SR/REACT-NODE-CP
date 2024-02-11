import React from "react"
import "./Header.css"
const Header = () =>{
    return(
        <div className="topbar">
        <div className="toggle">
            <ion-icon name="menu-outline"></ion-icon>
        </div>

        <div className="search">
            <label>
                <input type="text" placeholder="Search here" />
                <ion-icon name="search-outline"></ion-icon>
            </label>
        </div>

        <div className="user">
            <img src="/images/user.jpg" alt="" />
        </div>
    </div>
    )
}

export default Header