import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { Navbar } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { useSelector } from "react-redux";
import ProductDetails from "./ProductDetails";



export default function Home() {

  const getData = useSelector((state) => state.cartreducer.cart);
  console.log(getData);


  return (
    <div>
      <div>

        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Category</Navbar.Brand>
            <Navbar.Brand href="#">Brand</Navbar.Brand>
            <Navbar.Brand href="#">Gender</Navbar.Brand>
            <Navbar.Brand href="#">Goal</Navbar.Brand>
            <Navbar.Brand href="#">Best sellers</Navbar.Brand>
            <Navbar.Brand href="#">Details</Navbar.Brand>
            <Navbar.Brand href="#">Gift Card</Navbar.Brand>
            <Navbar.Brand href="#">Blog,Videos&More</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <div style={{ display: "block", width: 1500, padding: 30 }}>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://img6.hkrtcdn.com/14609/bnr_1460845_o.png"
              alt="First slide"
            />

          </Carousel.Item>

          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://img1.hkrtcdn.com/21467/bnr_2146650_o.jpg"
              alt="second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://img9.hkrtcdn.com/20867/bnr_2086658_o.jpg"
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src="https://img3.hkrtcdn.com/21468/bnr_2146712_o.jpg"
              alt="Fourth slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>


        
        <ProductDetails />

      </div>
    </div>
  );
}
