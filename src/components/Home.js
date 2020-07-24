import React from 'react';
import '../App.css';
import Image1 from '../images/slider-img.png';
import slider3 from '../images/slide3.jpg';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from  'react-router-dom';



function Home(){
  

    return(
        <div>
       <section     className='homePage' >
            <Container >
                <div className='homePageBox'>
                  <p className='homeHeader'>    KARL FASHION </p> 
                  <div className='homeHeader2'>
                    Here at KARL Fashion,<br></br>
                    we give nothing but quality products all through for both the Men and Women.
                    <a href='#slideId'><button className='homePageButton' >SHOP NOW   </button></a>
                  </div>
                 
                  </div>
                  <p className='homeHeader1'>    Your Favourite Online Fashion Shop  </p>
                      <div class='image1Box'>
                      <img src={Image1} className= 'image1' alt='Girl'></img>
                
                      </div>
                
           
            </Container>
      
           
        </section>

        <section  className='slides'>

       
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 image2"
      src={slider3}
      alt="First slide"
    />
    <Carousel.Caption className='slideCaption' id='slideId'>
      <h3>Men's Category</h3>
      <p><i> For amazing Men's outfits</i></p>
      <button className='slidesButton'>   <Link  to='/men'>
      Visit Men's Collection
         </Link></button>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 image2"
      src={slider3}
      alt="Second slide"
      
    />
   <Carousel.Caption className='slideCaption'>
      <h3>Women's Category</h3>
      <p><i> For amazing Women's outfits</i></p>
      <button className='slidesButton'>   <Link  to='/women'>
      Visit Women's Collection
         </Link></button>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100 image2"
      src={slider3}
      alt="Third slide"
    />
    <div className='slideBackground'></div>
    <Carousel.Caption className='slideCaption'>
      <h3>Accessories Category</h3>
      <p><i> For amazing nice accessories for both Men and Women </i></p>
      <button className='slidesButton'>   <Link  to='/accessories'>
      Visit Accessories Collection
         </Link></button>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      
        </section>
     
        
        </div>
    )
}



export default Home