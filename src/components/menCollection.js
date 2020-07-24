import React from 'react';
import  { Component } from 'react';
import Product from '../components/product';
import '../App.css';
import Cart from '../components/Cart';
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


const menList1 = [
  {
      "id": 1,
      "sku": "men1",
      "title": "Classic Denimim Shirt",
      "price":  2500,
     
    },
    {
      "id": 2,
      "sku": "men2",
      "title": "Skye Blue Shirt",
      "price":  2000,
    },
    {
      "id": 3,
      "sku": "men3",
      "title": "Causal T-Shirt",
      "price":  2100,
     
    },
    {
      "id": 4,
      "sku": "men4",
      "title": "Polo T-Shirt",
      "price":  1999,
     
    },  {
      "id": 5,
      "sku": "men5",
      "title": "Coprate Shirt ",
      "price":  2099,
     
    },  {
      "id": 6,
      "sku": "men6",
      "title": "African-Dye Shirt",
      "price":  2199,
     
    }
  ];

  const menList2 = [
    {
        "id": 1,
        "sku": "suit1",
        "title": "Wine Cooporate Shirt",
        "price":  10000,
       
      },
      {
        "id": 2,
        "sku": "suit2",
        "title": "Arabic Suit",
        "price": 12000,
       
      },
      {
        "id": 3,
        "sku": "suit3",
        "title": "Black Cooperate Suit",
        "price":  13000,
       
      },
      {
        "id": 4,
        "sku": "suit4",
        "title": "Dinner Tux",
        "price": 20000,
       
      },  {
        "id": 5,
        "sku": "suit5",
        "title": "Gold prime Suit",
        "price": 10000,
       
      },  {
        "id": 6,
        "sku": "suit6",
        "title": "Simple Green Suit",
        "price": 12000,
       
      }
    ];
    const menList3 = [
      {
          "id": 1,
          "sku": "trouser1",
          "title": "Cooperate Office Trousers",
          "price":  3000,
         
        },
        {
          "id": 2,
          "sku": "trouser2",
          "title": "Black Inn Trouser",
          "price":  2100,
         
        },
        {
          "id": 3,
          "sku": "trouser3",
          "title": "Sports Joggers",
          "price": 1200,
         
        },
        {
          "id": 4,
          "sku": "trouser4",
          "title": "Simple Blue Jeans",
          "price":  1200,
         
        },  {
          "id": 5,
          "sku": "trouser5",
          "title": " Cross Trouser",
          "price": ' 1599',
         
        },  {
          "id": 6,
          "sku": "trouser6",
          "title": "Slack Trousers",
          "price": 3200 
         
        }
      ];





class Men extends Component {

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
   

    <div > 
     
    <header className='heading1'>
         <h1> MEN'S COLLECTION </h1>
    </header>
    <Cart show={this.state.show} items={itemssent} handleClose={this.hideModal}> </Cart>
      <Row className='collectionBox'>
     
        <Col md={3} className='categories'>
            <h4 className='productHeading'> Categories</h4>
           
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
<h4  className='productHeading'> Brands</h4>
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
           
            {menList1.map ( item => (
       
      
         <Col md={4} key={item.id}>
                <Paper elevation={3} className='productBox'>
                <Product key={item.id} image={item.sku} name={item.title} price={item.price} handleAddToCart={this.handleAddToCart}/>
       
           </Paper>
         </Col>
            
          
          ))}



            </Row>
              </Container>     

              <Container>
              <Container className='heading2'> Shirts </Container>
                <Row id='suits'>
               
                {menList2.map( item => ( 
       
       
              <Col md={4}  key={item.id}>
                 <Paper elevation={3} className='productBox'>
                 <Product key={item.id} image={item.sku} name={item.title} price={item.price} handleAddToCart={this.handleAddToCart}/>

              </Paper>
        </Col>

                ))}
           
                </Row>
              </Container>

           <Container>
           <Container className='heading2'> Shirts </Container>
           <Row id='trousers'>

    {menList3.map( item => (
        <Col  md={4}  key={item.id}>
           <Paper elevation={3} className='productBox'>
           <Product key={item.id} image={item.sku} name={item.title} price={item.price} handleAddToCart={this.handleAddToCart}/>
           </Paper>
           </Col>
           ))}
          </Row>
           </Container>
        </Col>
     </Row>
    


      </div>


     
   )
}}


export default Men