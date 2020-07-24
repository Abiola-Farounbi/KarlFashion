import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { toast} from 'react-toastify'

    toast.configure();
    const Cart = ({ handleClose, show, items }) => {

    async function handleToken(token , addresses){
        // console.log('hi')
       const response=  await  axios.post(' https://ry7v05l6on.sse.codesandbox.io/checkout',{token, items}
        )
        const {status } = response.data
        if (status === 'sucess'){
          toast('Sucess! Check emails for details ',
          {type:'sucess'})
        }
        else{
          toast('Something went wrong ',
          {type:'error'}) 
        }
      }
      var total = 0;
      var count=1;

        return (

          <div className={show ? "modal1 display-block" : "modal display-none"}>
            <section className="modal-main">
                 <button className="btn btn-danger mr-5 mt-3 mb-3" onClick={handleClose}> <CloseIcon/> </button> 
                 <h4  className='productHeading text-center'> <b >SHOPPING CART <ShoppingCartIcon/> </b> </h4>       
          {items.length === 0 ? <div className='text-center'> <i>Cart is empty </i></div> : <div></div>}

                {items.length > 0 && 
                     <Container>
                       <Row>
                      
                        {items.map(item => 
                        
                   <Col md={4}>       
                            <div className='cartImage m-2 p-3'>
                             <div className='numberBox p-2 text-center'> {count++}  </div>
                            <br></br>
                            <b>Product</b>- {item.name}
                            <br></br>
                             <b>Price</b>- {item.price}
                            </div>
                           <span className='none'>  {total += item.price} </span>
                        
                            </Col>
                            )}  
                        </Row>
                        <button className='btn btn-outline-primary mt-3 mb-3'  > Total - { total}</button>
            <StripeCheckout  
            className='floatRight' 
            stripeKey='pk_test_51H7WjqINVlhwQxNFCvXWgv8iLDV5dyvFlJFpTrdnaOfmulZ9XI3oOk0HBZlgiuHMUbDdhsKAZ6H4k593LI22jgIy00g6tf3KPk'
            token={handleToken}
            billingAddress
            shippingAddress
            amount={total / 400 }
            name={' KARL FASHION '}
            />

            <div className='text-center mt-5 pt-5'> <b>

                      *Please use the following test credit card details for payment*
                      4242 4242 4242 4242 <br></br>
                      Exp: 01/21 - CVV:123
               </b>  </div>

                    </Container>
    }

        
     
            </section>
          </div>
        );
      
      };
 
      
      export default Cart;