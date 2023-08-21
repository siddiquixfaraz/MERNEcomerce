import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css'
import banner from "../../assets/banner-img.png"

function UncontrolledExample() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img  className='c-img' src="https://mrbeast.store/cdn/shop/files/Hero-Banner-2.jpg?v=1688143848&width=1100" alt="" />
        <Carousel.Caption>
          <h3>NEW ARRIVALS</h3>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='c-img' src="https://mrbeast.store/cdn/shop/files/Hero-Banner-2.jpg?v=1688143848&width=1100" alt="" />
        <Carousel.Caption>
        <h3>NEW ARRIVALS</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
            <img className='c-img' src="https://mrbeast.store/cdn/shop/files/Hero-Banner-3.jpg?v=1688143917&width=1100" alt="" />
        <Carousel.Caption>
        <h3>NEW ARRIVALS</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;