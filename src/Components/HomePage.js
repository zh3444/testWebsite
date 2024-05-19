import React, { useState } from "react";
import "../Component-Styles/HomePage.css";
import icon7 from "../Icons/icon7.jpg";

function HomePage() {
    const [box1Flipped, setBox1Flipped] = useState(false);
    const [box2Flipped, setBox2Flipped] = useState(false);
    const [box3Flipped, setBox3Flipped] = useState(false);
    const [box4Flipped, setBox4Flipped] = useState(false);
    const [box5Flipped, setBox5Flipped] = useState(false);

    const handleFlip = (boxNum) => {
        switch (boxNum) {
            case 1:
                setBox1Flipped(!box1Flipped);
                break;
            case 2:
                setBox2Flipped(!box2Flipped);
                break;
            case 3:
                setBox3Flipped(!box3Flipped);
                break;
            case 4:
                setBox4Flipped(!box4Flipped);
                break;
            case 5:
                setBox5Flipped(!box5Flipped);
                break;
            default:
                console.log("invalid!");
        };
    }

    return (
        <div className="homeContainer">
            <div className="aboutUs">
                <h1> 我们是谁 </h1>
                <p> 我们是RV留学工作室, 我们明白每一位学生的留学梦想是独一无二的，
                    我们致力于提供量身定制的学术申请服务。我们的团队成员来自各个领域，
                    拥有丰富的高学历背景，尤其擅长社会科学、统计科学、法学等领域的申请。
                    对于有意申请艺术专业的学生，我们还与专业的艺术申请团队合作，
                    确保您的申请既专业又出彩。我们的服务覆盖从基础的学校申请到整体的学
                    术生涯规划建议及相关申请，旨在帮助每一位学生实现其留学和职业梦想。 </p>
                <img src={icon7} alt="study" />
            </div>

            <div className="ourStrengths">
                <h1> 我们的优势 </h1>
                <div className="boxContainer">
                    <div className={`box1 ${box1Flipped ? 'flipped' : ''}`} onClick={() => handleFlip(1)}>
                        <div className="innerbox">
                            <div className="box-front">
                                <p> 个性化的指导和服务</p>
                                <p className="more"> 了解更多 </p>
                            </div>
                            <div className="box-back">
                                <p className="para1"> 针对每位学生的背景和目标，提供个性化的留学规划和指导  </p>
                                <p className="para2"> 不套用模板、不搞流水线作业、一对一服务，
                                    致力于为每位学生提供定制化的留学方案 </p>
                            </div>
                        </div>
                    </div>

                    <div className={`box2 ${box2Flipped ? 'flipped' : ''}`} onClick={() => handleFlip(2)}>
                        <div className="innerbox">
                            <div className="box-front">
                                <p> 整体的策略制定</p>
                                <p className="more"> 了解更多 </p>
                            </div>
                            <div className="box-back">
                                <p className="para1"> 为学生提供更加全面的留学战略建议，包括留学规划、
                                    学术会议规划和人才计划规划等  </p>
                            </div>
                        </div>
                    </div>

                    <div className={`box3 ${box3Flipped ? 'flipped' : ''}`} onClick={() => handleFlip(3)}>
                        <div className="innerbox">
                            <div className="box-front">
                                <p> 专注会议申请</p>
                                <p className="more"> 了解更多 </p>
                            </div>
                            <div className="box-back">
                                <p className="para1"> 为学生提供专业的学术指导，
                                    推进学术成果和会议申请, 会议投稿成功率高达99%   </p>
                            </div>
                        </div>
                    </div>

                    <div className={`box4 ${box4Flipped ? 'flipped' : ''}`} onClick={() => handleFlip(4)}>
                        <div className="innerbox">
                            <div className="box-front">
                                <p> 数据统计培训</p>
                                <p className="more"> 了解更多 </p>
                            </div>
                            <div className="box-back">
                                <p className="para1"> 为学生提供R, SPSS, Python,
                                    MPlus等数据分析软件/语言的使用培训，及统计分析入门和进阶指导  </p>
                            </div>
                        </div>
                    </div>

                    <div className={`box5 ${box5Flipped ? 'flipped' : ''}`} onClick={() => handleFlip(5)}>
                        <div className="innerbox">
                            <div className="box-front">
                                <p> 国内海外双base </p>
                                <p className="more"> 了解更多 </p>
                            </div>
                            <div className="box-back">
                                <p className="para1"> 在国内和海外均有成员，提供更方便的多时区支持  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default HomePage;