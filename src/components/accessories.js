import React from 'react';
import '../App.css';
import  { Component } from 'react';
import Cart from '../components/Cart';
import Product3 from '../components/product3';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const accList1 = [
  {
      "id": 1,
      "sku": "bagM1",
      "title": "Laptop Bag",
      "price": 2999,
     
    },
    {
      "id": 2,
      "sku": "bagM2",
      "title": "Mini-Size Bag",
      "price": 2000,
    },
    {
      "id": 3,
      "sku": "bagM3",
      "title": "Leather Bag",
      "price": 2100,
     
    },
    {
      "id": 4,
      "sku": "beltM1",
      "title": "Classic Belt",
      "price": 799,
     
    },  {
      "id": 5,
      "sku": "beltM2",
      "title": 'Rodgers Belt',
      "price": 999,
     
    },  {
      "id": 6,
      "sku": "beltM3",
      "title": "Plastic Belt",
      "price": 999,
     
    }
  ];

  const accList2 = [
    {
        "id": 1,
        "sku": "bagW1",
        "title": "Leather Pink Bag",
        "price": 9999,
       
      },
      {
        "id": 2,
        "sku": "bagW2",
        "title": "Quin Green Bag",
        "price": 9999,
       
      },
      {
        "id": 3,
        "sku": "bagW3",
        "title": 'Red Clutch',
        "price": 9999,
       
      },
      {
        "id": 4,
        "sku": "jewl1",
        "title": "Old Lace Complete Set",
        "price": 9999,
       
      },  {
        "id": 5,
        "sku": "jewl2",
        "title": "Silver Complete Set",
        "price": 9999,
       
      },  {
        "id": 6,
        "sku": "jewl3",
        "title": "Gold Complete Set",
        "price": 9999,
       
      }
    ];








class Accessories extends Component {

  constructor(props) {
   super(props);
   this.state = {
     cartitems: [],  
   };
   this.handleAddToCart= this.handleAddToCart.bind(this)
  }

  handleAddToCart = (item,item1,item2) => {
    this.setState({
        cartitems : this.state.cartitems.concat([
          {
            "name":item,
            "price":item1,
            "image":item2
          }
        ])   
    });
  }

  showModal = () => {
   this.setState({ show: true });
 };

 hideModal = () => {
   this.setState({ show: false });
 };


 render() {
   
  const itemssent = this.state.cartitems;

   return (
       <div>
    <header className='heading1'>
         <h1> ACCESSORIES COLLECTION </h1>
    </header>
    <Cart show={this.state.show} items={itemssent} handleClose={this.hideModal}> </Cart>
      <Row className='collectionBox'>
        <div className='cart'></div>

        <Col md={3} className='categories'>           
            <h4> Categories</h4>
          <List className='collectionCategory' >
<ListItem>
  <ListItemAvatar>
    <Avatar>
     < FiberManualRecordIcon/>
    </Avatar>
  </ListItemAvatar>
  <a href='#shirts'>
  <ListItemText primary="Men" secondary="Six Items Available" >

    </ListItemText>
    </a>
</ListItem>
<ListItem>
  <ListItemAvatar>
    <Avatar>
    <FiberManualRecordIcon/>
    </Avatar>
  </ListItemAvatar>
  <a href='#suits'>
  <ListItemText primary="Women" secondary="Six Items Available" >

    </ListItemText>
    </a>
</ListItem>

</List>
          <h4> Brands</h4>
          <List className='collectionBrands'>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <StarIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="ZARA" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <StarIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="MANGO" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <StarIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="TOPSHOP"  />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <StarIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="ASOS"  />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <StarIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="BERSHKA"  />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <StarIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="RIVER ISLAND"  />
            </ListItem>
            </List>     
            <div className='alert alert-secondary cart'>          
          {itemssent.length === 0 ? <div> Cart is empty </div>
          :<div> You have {itemssent.length} products in the Cart </div>}
      <br></br>
      <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => this.showModal()}> <ShoppingCartIcon/> Cart  {(itemssent.length)}</button>
      </div>    
        </Col>
        <Col md={9}>
            <Container>
            <Container className='heading2'> Men </Container>
                  <Row id='shirts'>
           
            {accList1.map ( item => (
       
      
         <Col md={4} key={item.id}>
                <Paper elevation={3} className='productBox'>
                <Product3 key={item.id} image={item.sku} name={item.title} price={item.price} handleAddToCart={this.handleAddToCart}/>
       
           </Paper>
         </Col>
            
          
          ))}



            </Row>
              </Container>     

              <Container>
              <Container className='heading2'> Women</Container>
                <Row id='suits'>
               
                {accList2.map( item => ( 
       
       
              <Col md={4}  key={item.id}>
                 <Paper elevation={3} className='productBox'>
                 <Product3 key={item.id} image={item.sku} name={item.title} price={item.price} handleAddToCart={this.handleAddToCart}/>

              </Paper>
        </Col>

                ))};
           
                </Row>
              </Container>


        </Col>
     </Row>
    

     </div>
    


     
    )
  }
}



export default Accessories