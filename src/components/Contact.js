import React from 'react';
import '../App.css';
import Form from 'react-bootstrap/Form'

function Contact(){
    return(
        <div className='contactBackground'>
         <div> 
         <h4 className='text-center p-3 homeHeader'>
            Get In Touch
        </h4>
        <section className='contactForm pt-4'>
        
        <Form>
  <Form.Group controlId="formGroupInput">
    {/* <Form.Label>Fullname </Form.Label> */}
    <Form.Control  className='inputName' type="input" placeholder="Fullname" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
   
    <Form.Control type="email" className='inputEmail' placeholder="Email" />
  </Form.Group>
  <Form.Group controlId="formGroupInput">
    <Form.Control  className='inputName' type="input" placeholder="Subject" />
  </Form.Group>
  <Form.Group controlId="formGroupTextarea">
      <Form.Control type='textarea' className='textArea' placeholder='Message'/> 
  </Form.Group>
  <div className='text-center'>
    <button className='contactButton'>
        <a href="mailto:farounbiabiola@gmail.com">Send  Message</a>
    </button>
  </div>
</Form>
        </section>
        </div>  
        </div>
    )
}



export default Contact
