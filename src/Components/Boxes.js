import React from "react"
import Container from  "react-bootstrap/Container"
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import {Link} from "react-router-dom"
const color = {
    color: "white",
    
}
const Box = () => {
    return (
        <Container >
            <Row  className="grid">
                <Col sm >
                    <div className="box" >
                       <p className="boxPara" ><Link to="/Cs" style={color} >Computer Science</Link></p> 
                    </div>
                </Col>
                <Col sm >
                    <div className="boxTwo" >
                        <p className="boxPara">Mathematics</p>
                    </div>
                </Col>
                <Col sm >
                    <div className="boxThree" >
                        <p className="boxPara">Movies</p>
                    </div>
                </Col>
                <Col  sm>
                    <div className="boxFour" >
                        <p className="boxPara">Music</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Box