import React from "react"
import title from "../Assets/title.svg"
import logo from "../Assets/logo.svg"



const Home = () => {
    return (
        <React.Fragment className="container">
            <div className="d-flex justify-content-center  ">
                <div className="imgTitle">
                    <img src={title} alt="title" className="title" />
                </div>
            </div>
            <div className="d-flex justify-content-center  ">
                <div className="imgLogo" >
                    <img src={logo} alt="logo" className="logo" />
                </div>
            </div>
            <div className="d-flex justify-content-center  ">
                <div className="paraDiv">
                    <p className="para">For each Gategory you will have 30 Questions</p>
                </div>
            </div>
            <div className="grid">
                <div className="box" >
                    <p className="boxPara">Computer Science</p>
                </div>
                <div className="boxTwo" >
                    <p className="boxPara">Mathematics</p>
                </div>
            </div>
        </React.Fragment>

    )
}

export default Home