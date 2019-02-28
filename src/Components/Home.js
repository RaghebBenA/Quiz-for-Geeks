import React from "react"
import title from "../Assets/title.svg"
import logo from "../Assets/Quiz Logo.svg"
import Box from "./Boxes"


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
            <div>
                <Box />
            </div>
        </React.Fragment>

    )
}

export default Home