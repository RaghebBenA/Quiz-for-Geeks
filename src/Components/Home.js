import React from "react"
import title from "../Assets/title.svg"
import logo from "../Assets/logo.svg"


const Home = () => {
    return (
        <React.Fragment className="d-flex flex-column">
            <div className="d-flex justify-content-center  ">
                <div className="title">
                    <img src={title} alt="title" />
                </div>
            </div>
            <div className="d-flex justify-content-center  ">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="d-flex justify-content-center  ">
            <div >
                <p className="para">For each Gategory you will have 30 Questions</p>
            </div>
        </div>
        </React.Fragment>

    )
}

export default Home