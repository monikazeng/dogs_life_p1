import React from 'react'
import images from "../index"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import batman from '../images/batman.jpeg';

const HeroDetail = (props) => {
  return (
    <Card >
      <div className="imgContainer">
        <Card.Img variant="top" src={images[props.info.alias.replaceAll(/\s/g, '')]} width="150px" />
      </div>
      <Card.Body >
        <Card.Title >Alias: {props.info.alias}</Card.Title>
        <Card.Text >Name: {props.info.name}</Card.Text>
        <Button variant="primary">Like</Button>
      </Card.Body>
    </Card>
  )
}

// <img src={batman} alt="Batman" height="250px"/>
// <p id="blue-alias">Alias: Batman</p>
// <p className="green-class">Name: Bruce Wayne</p>
// <button className="green-class">Like</button>

// <div>
//     <img src={images[props.info.alias.replaceAll(/\s/g,'')]} alt={props.info.name} height="250px"/>
//     <p id="blue-alias">Alias: {props.info.alias}</p>
//     <p className="green-class">Name: {props.info.name}</p>
//     <button className="green-class">Like</button>
// </div>

export default HeroDetail