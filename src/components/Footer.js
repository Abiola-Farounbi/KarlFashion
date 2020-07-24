import React from 'react';
import '../App.css';
import brand1 from '../images/brand1.png';
import brand2 from '../images/brand2.png';
import brand3 from '../images/brand3.png';
import brand4 from '../images/brand4.png';
import brand5 from '../images/brand5.png';
import brand6 from '../images/brand6.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StarIcon from '@material-ui/icons/Star';
import Logo from '../images/logo1.png';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LanguageIcon from '@material-ui/icons/Language';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';



function Footer (){
    return(
        
        <footer className='footer'>
            <section className='footer1'>
                <img className='image3' src={brand1} alt='logo'></img>
                <img    className='image3' src={brand2} alt='logo'></img>
                <img  className='image3' src={brand3} alt='logo'></img>
                <img className='image3' src={brand4} alt='logo'></img>
                <img className='image3' src={brand5} alt='logo'></img>
                <img className='image3' src={brand6} alt='logo'></img>
            </section>
            <section className='footer2'>
                <Container className='add'>
                    <Row>
                        <Col md={6}>
                        
            <div className='footerLogo' > <img  className='footerLogoImage' alt='Logo' src={Logo}></img></div>
           <div className='footerText3'> 
         
               <ul>
                   <li>   <StarIcon className='footerIconColor1' /> Quality products  </li>
                   <li>   <StarIcon className='footerIconColor1'/> Good Customer Services</li>
                   <li>  <StarIcon className='footerIconColor1' /> Delivery Services</li>

               </ul>
           </div>
           
                        </Col>
                        <Col md={6}>
                        <div className='footerBody'> 
         <p className='footerText3'>  Reach Us On Our Social Media </p>
          <div className='icon-cover'>
          <a href='https://abiolaesther.netlify.app/'>  <LanguageIcon className='icon'></LanguageIcon></a>
          <a href='https://abiolaesther.netlify.app/'> <TwitterIcon className='icon'></TwitterIcon></a>
          <a href='https://abiolaesther.netlify.app/'>  <InstagramIcon className='icon'></InstagramIcon> </a>     
          </div>
       
          </div>
                        </Col>
                    </Row>
                </Container>
                <p className='footerText1'>  Copyright &copy;{new Date().getFullYear()} All rights reserved | Designed by <  FavoriteIcon className='footerIconColor'/>by <a  href="https://abiolaesther.netlify.app/"> Abiola Esther </a></p>
         </section>
        </footer>
    )
}



export default Footer