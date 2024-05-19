import React from "react";
import { Link } from "react-router-dom";
import '../Component-Styles/NavBar.css';

function NavBar() {
    return (
        <div className="container">
            <p className="Home"><Link to="/"> Home </Link></p>
            <p className="OurTeam"><Link to="/OurTeam"> 我们的团队 </Link></p>
            <p className="Services"><Link to="/Services">  服务内容 </Link></p>
            <p className="SuccessCases"><Link to="/SuccessCases"> 成功案例 </Link> </p>
            <p className="ContactInfo"><Link to="/ContactInfo"> 联系信息 </Link> </p>
        </div>
    );
}

export default NavBar;
