import React from 'react'
import Button from 'react-bootstrap/Button';
import Cards from 'react-bootstrap/Card';
import image from "../../Assets/Home.png"

const Card = () => {
  return (
    <>
           <Cards style={{ width: '18rem' }}>
      <Cards.Img variant="top" src={image} />
      <Cards.Body>
        <Cards.Title>Card Title</Cards.Title>
        <Cards.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Cards.Text>
        <Button variant="primary">Go somewhere</Button>
      </Cards.Body>
    </Cards>
    </>
  )
}

export default Card