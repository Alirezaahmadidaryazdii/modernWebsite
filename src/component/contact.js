import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import contactImg from "../accetss/imges/contact-img.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [fromDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...FormData,
      [category]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };
  return (
    <section className="contact" id="connect">
      <Row className="align-items-center">
        <Col md={6}>
          <img src={contactImg} />
        </Col>
        <Col md={6}>
          <h2>Get In Touch</h2>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col sm={6} className="px-1">
                <input
                  type="text"
                  value={fromDetails.firstName}
                  placeholder="First Name"
                  onChange={(e) => onFormUpdate("Fist Name", e.target.value)}
                />
              </Col>
              <Col sm={6} className="px-1">
                <input
                  type="text"
                  value={fromDetails.lastName}
                  placeholder="First Name"
                  onChange={(e) => onFormUpdate("Last Name", e.target.value)}
                />
              </Col>
            </Row>
            <Col sm={6} className="px-1">
              <input
                type="email"
                value={fromDetails.email}
                placeholder="First Name"
                onChange={(e) => onFormUpdate("Email Address", e.target.value)}
              />
            </Col>
            <Col sm={6} className="px-1">
              <input
                type="tel"
                value={fromDetails.phone}
                placeholder="First Name"
                onChange={(e) => onFormUpdate("Phone no.", e.target.value)}
              />
            </Col>
            <Col>
            <textarea row='6' value={fromDetails.message} placeholder="Message" onChange={(e)=>{onFormUpdate('message', e.target.value)}}></textarea>
            <button type="submit"><span>{buttonText}</span></button>
            </Col>
            {
                status.message && 
                <Col>
                <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                </Col>
            }
          </form>
        </Col>
      </Row>
    </section>
  );
};
