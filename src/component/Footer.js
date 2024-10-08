import { Col, Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logo from '../accetss/imges/logo.svg'
import navIcon1 from '../accetss/imges/nav-icon1.svg'
import navIcon2 from '../accetss/imges/nav-icon2.svg'
import navIcon3 from '../accetss/imges/nav-icon3.svg'
export const Footer = ()=>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                    <img src={logo} />
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                    <div className="social-icon">
                        <a href=''><img src={navIcon1}/></a>
                        <a href=''><img src={navIcon2}/></a>
                        <a href=''><img src={navIcon3}/></a>
                    </div>
                    <p>CopyRight 2022. All Right Resolver</p>
                    </Col>
                </Row> 
            </Container>
        </footer>
    )
}