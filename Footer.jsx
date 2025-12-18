
import "../Styles/Footer.css";
import { QrcodeOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import globeImg from "../Assets/mapvector.jpg";


export default function Footer() {
  const onFinish = async (values) => {
    await fetch("https://formspree.io/f/yourFormID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="footer-container">
      <div className="left-section">
        <h2>Book Popular Flight Ticket</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <img
          src={globeImg} alt="flight world" className="flight-image"
        />
      </div>

      <div className="right-section">
        <div className="form-box">
          <h3 style={{color: "black", fontWeight : "900"}}>Book Your Flight Now</h3>
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item name="name" rules={[{ required: true }]}> 
              <Input placeholder="Enter Your Name" />
            </Form.Item>

            <Form.Item name="contact" rules={[{ required: true }]}> 
              <Input placeholder="Enter Your Contact" />
            </Form.Item>

            <Button type="primary" htmlType="submit" className="book-btn">
              Book
            </Button>
             <div className="qr-area">
              <QrcodeOutlined style={{ fontSize: "80px",  }} />
              
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}