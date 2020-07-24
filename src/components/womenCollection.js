import React from 'react';
import '../App.css';
import  { Component } from 'react';
import Cart from '../components/Cart';
import Product2 from '../components/product2';
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

const womenList1 = [
  {
      "id": 1,
      "sku": "dress1",
      "title": "Casual Gown",
      "price": 3599,
     
    },
    {
      "id": 2,
      "sku": "dress2",
      "title": "Simple Overalls",
      "price": 2999,
    },
    {
      "id": 3,
      "sku": "dress3",
      "title": "Evening Dress",
      "price": 3900,
     
    },
    {
      "id": 4,
      "sku": "dress4",
      "title": "Off-shoulder Dress",
      "price": 6999,
     
    },  {
      "id": 5,
      "sku": "dress5",
      "title": "Simple Dress ",
      "price": 3999,
     
    },  {
      "id": 6,
      "sku": "dress6",
      "title": "Cooperate Gown",
      "price": 5999
     
    }
  ];

  const womenList2 = [
    {
        "id": 1,
        "sku": "skirt1",
        "title": "Cooperate Office Skirt",
        "price": 2599,
       
      },
      {
        "id": 2,
        "sku": "skirt2",
        "title": "Flare Skirt",
        "price": 1999,
       
      },
      {
        "id": 3,
        "sku": "skirt3",
        "title": "Floral Skirt ",
        "price": 2999,
       
      },
      {
        "id": 4,
        "sku": "skirt4",
        "title": "Black Straight Skirt",
        "price": 1999,
       
      },  {
        "id": 5,
        "sku": "skirt5",
        "title": "Mini Jeans Skirt",
        "price": 999,
       
      },  {
        "id": 6,
        "sku": "skirt6",
        "title": "Pattern Skirt",
        "price": 2100,
       
      }
    ];
    const womenList3 = [
      {
          "id": 1,
          "sku": "top1",
          "title": "White Cooperate Top",
          "price": 1599,
         
        },
        {
          "id": 2,
          "sku": "top2",
          "title": "Simple Plain Top",
          "price": 1999,
         
        },
        {
          "id": 3,
          "sku": "top3",
          "title": "Dot-Pattern Top",
          "price": 2100,
         
        },
        {
          "id": 4,
          "sku": "top4",
          "title": "Cut-Off Top",
          "price": 3999,
         
        },  {
          "id": 5,
          "sku": "top5",
          "title": "V-neck Top",
          "price": 2199,
         
        },  {
          "id": 6,
          "sku": "top6",
          "title":"Plain White Top",
          "price": 1299,
         
        }
      ];





class Women extends Component {

  constructor(props) {
   super(props);
   this.state = {
     cartitems: []
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
   }

 render() {
  const itemssent = this.state.cartitems;

   return (
    <div >  
    <header className='heading1'>
         <h1> WOMEN'S COLLECTION </h1>
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
  <ListItemText primary="Shirts" secondary="Six Items Available" >

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
  <ListItemText primary="Suits" secondary="Six Items Available" >

    </ListItemText>
    </a>
</ListItem>
<ListItem>
  <ListItemAvatar>
    <Avatar>
    < FiberManualRecordIcon/>
    </Avatar>
  </ListItemAvatar>
  <a href='#trousers'>
  <ListItemText primary="Trousers" secondary="Six Items Available" >

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
                : <div> You have {itemssent.length} products in the Cart </div>}
  <br></br>
  <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => this.showModal()}> <ShoppingCartIcon/> Cart {(itemssent.length)}</button>
  </div>        
</Col>
        <Col md={9}>
            <Container>
            <Container className='heading2'> Shirts </Container>
                  <Row id='shirts'>
           
            {womenList1.map ( item => (
       
      
         <Col md={4} key={item.id}>
                <Paper elevation={3} className='productBox'>
                <Product2 key={item.id} image={item.sku} name={item.title} price={item.price} handleAddToCart={this.handleAddToCart}/>
       
           </Paper>
         </Col>
            
          
          ))}



            </Row>
              </Container>     

              <Container>
              <Container className='heading2'> Shirts </Container>
                <Row id='suits'>
               
                {womenList2.map( item => ( 
       
       
              <Col md={4}  key={item.id}>
                 <Paper elevation={3} className='productBox'>
                 <Product2 key={item.id} image={item.sku} name={item.title} price={item.price} handleAddToCart={this.handleAddToCart}/>

              </Paper>
        </Col>

                ))};
           
                </Row>
              </Container>

           <Container>
           <Container className='heading2'> Shirts </Container>
           <Row id='trousers'>

    {womenList3.map( item => (
        <Col  md={4}  key={item.id}>
           <Paper elevation={3} className='productBox'>
           <Product2 key={item.id} image={item.sku} name={item.title} price={item.price} handleAddToCart={this.handleAddToCart}/>
           </Paper>
           </Col>
           ))};
          </Row>
           </Container>
        </Col>
     </Row>
    


      </div>


     
   )
}}



export default Women