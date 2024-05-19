import React from "react";
import "../Component-Styles/Services.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./SliderArrows";
import applyProcess from "../Icons/applyProcess.png";

function Services() {
    const SliderSettings = {
        dots: true, //show dots at bottom of slider
        infinite: true, //infinite scrolling
        speed: 500, //scroll speed
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    return (
        <div className="servicesContainer">
            <Slider {...SliderSettings}>
                <div className="applyMethods">
                    <h1> 学校申请&奖学金申请 </h1>
                    <h2> 选校和策略制定 </h2>
                    <p> 基于您的学术背景、职业规划和个人兴趣，我们将帮助您确定最适合您的院校和专业。
                        我们考虑学校排名、教学质量、地理位置、就业前景等因素，为您制定最佳申请策略。 </p>
                    <h2> 文书准备 </h2>
                    <p> 我们将指导您准备申请所需的各类文书，包括个人陈述、推荐信、简历等。
                        我们将根据您的情况和目标院校的要求，帮助您撰写出能够突显您优势和独特之处的申请文书。 </p>
                    <h2> 奖学金申请 </h2>
                    <p> 我们将协助您寻找适合的奖学金机会，并提供申请指导和支持，帮助您准备申请材料、
                        撰写申请文书，提高获奖概率。 </p>
                </div>

                <div className="applyMethods">
                    <h1> 学术会议申请 </h1>
                    <p> 如果您计划参加学术会议，我们可以为您提供支持，包括寻找合适的会议、
                        制作申请材料、撰写论文摘要、准备演讲稿等。 </p>
                </div>

                <div className="applyMethods">
                    <h1> 人才项目申请 </h1>
                    <p> 如果您有意向申请海外人才项目, 如香港优才和高才项目、美国的EB1A项目,
                        我们可以为您提供全程指导，帮助您准备申请材料，提升申请成功率。 </p>
                </div>

                <div className="applyMethods">
                    <h1> 数据分析入门 </h1>
                    <p> 如果您需要丰富数据分析方向的能力和背景, 我们提供R, SPSS, Python, MPlus
                        等数据分析软件/语言的使用培训，及统计分析入门和进阶指导。 </p>
                </div>

                <div className="applyMethods">
                    <h1> 语言辅导 </h1>
                    <p> 申请过程中英文面试和语言类考试（英语）准备，如果需要，我们也会为您提供前期的介绍和辅导。 </p>
                </div>
            </Slider>
            <div className="applyProcess">
                <h1> 服务流程 </h1>
                <img src={applyProcess} alt="applyProcess" />
            </div>
        </div>
    );
}

export default Services;