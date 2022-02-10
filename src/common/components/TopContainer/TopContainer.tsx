/* eslint-disable @next/next/no-img-element */
import { Container, Row, Col } from "react-bootstrap"

interface TopContainerProps {

}

const TopContainer = ({ }: TopContainerProps) => {
  return (
    <>
      <div className="background"></div>
      <div className="texture">
        <Container className="container-top">
          <Row className="section-top">
            <Col xs={12} md={6} className="section-top-left">
              <img className="img-fluid" src="/assets/mobile.png" alt="" />
            </Col>
            <Col xs={12} md={6} className="section-top-right shadow">
              <div className="plate-img-container">
                <img
                  className="plate-img img-fluid"
                  src="/assets/plate-two.png"
                  alt=""
                />
                <img
                  className="plate-img img-fluid"
                  src="/assets/plate-three.png"
                  alt=""
                />
              </div>
              <h6>FOODO</h6>
              <h2>Get Your Food In</h2>
              <h1>FOODO</h1>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs.
              </p>
              <button className="btn btn-custom">Download App</button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
export default TopContainer