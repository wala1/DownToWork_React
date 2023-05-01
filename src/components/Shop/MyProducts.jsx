import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UpdateModal from './UpdateModal';
import DeleteModal from './DeleteModal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


function MyProducts() {
    const [products, setProducts] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'));
    const id = user._id;
    useEffect(() => {
        axios.get (`http://localhost:3001/product/getProdByOwner/`+id)
        .then((response) => {
            setProducts(response.data);
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
   const handleDelete = async (id) => {
        setProducts(products.filter (product => product._id !== id));
    }
  return (
    <div style={{paddingTop:80}}>
    <div style={{color:"white",
    fontWeight:"bold",
    backgroundColor:"green", 
    fontSize:50,
     height:80,
     padding:20,
     display:"flex",
     justifyContent:"center",
     alignItems:"center"}}>
            My Products
        </div>
    <div className='d-flex flex-lg-row pt-100 justify-content-evenly flex-sm-column'>
        
        {products.map((product) => (
      
      <Card sx={{ maxWidth: 200 , margin:2}}>
      <CardMedia
        component="img"
        alt="product image"
        height="140"
        src={product.prodImg ? `http://localhost:3001/${product.prodImg.imgUrl}` : "/assets/images/logoDTW.png"}

        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.prodName}
        </Typography>
        <span className="price">
						<span className="amount">&pound;{product.prodPrice}</span>
					</span>
        <Typography variant="body2" color="text.secondary">
          {product.prodDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <UpdateModal product={product}/>
        <DeleteModal product={product} handleDelete={handleDelete}/>
      </CardActions>
    </Card>
		))}
    </div>
    </div>
  )
}

export default MyProducts