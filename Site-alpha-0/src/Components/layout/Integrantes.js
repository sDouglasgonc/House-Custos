import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from "../imgs/homemadulto.png"
import image2 from "../imgs/painho.png"
import image3 from "../imgs/mainha.png"
import "./Integrantes.css"
const imagens = [image1,image2,image3]

function Slides() {
  return (

    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagens[0]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagens[1]}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


export default Slides;