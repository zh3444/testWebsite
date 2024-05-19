import React from "react";
import icon1 from "../Icons/icon1.png";
import icon2 from "../Icons/icon2.png";
import icon3 from "../Icons/icon3.png";
import icon4 from "../Icons/icon4.png";
import icon5 from "../Icons/icon5.png";
import icon6 from "../Icons/icon6.png";
import "../Component-Styles/OurTeam.css";

function OurTeam() {
    return (
        <div className="teamContainer">
            <div className="member">
                <div className="circle-bg">
                    <img src={icon1} alt="icon1" className="icon1" />
                </div>
                <p> 美国心理学Top 10在读博士 </p>
            </div>

            <div className="member">
                <div className="circle-bg">
                    <img src={icon2} alt="icon2" className="icon2" />
                </div>
                <p> 国际隐私协会会员 </p>
            </div>

            <div className="member">
                <div className="circle-bg">
                    <img src={icon3} alt="icon3" className="icon3" />
                </div>
                <p> 美国大学独立讲师，实验室管理者 </p>
            </div>

            <div className="member">
                <div className="circle-bg">
                    <img src={icon4} alt="icon4" className="icon4" />
                </div>
                <p> 欧陆top法学院硕士 </p>
            </div>

            <div className="member">
                <div className="circle-bg">
                    <img src={icon5} alt="icon5" className="icon5" />
                </div>
                <p> 高影响因子学术期刊审稿人 </p>
            </div>

            <div className="member">
                <div className="circle-bg">
                    <img src={icon6} alt="icon6" className="icon6" />
                </div>
                <p> 在职数据科学家 </p>
            </div>
        </div>
    );
}

export default OurTeam;