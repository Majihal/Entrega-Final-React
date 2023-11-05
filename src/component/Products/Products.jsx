import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import {Link} from "react-router-dom"
import cartContext from '../../store/cartContext';

import "./Products.css"

export const ProductsItem = ({producto} ) => {

  const{setCart}=useContext(cartContext)

  const handleClick = () => {
    setCart((oldState)=> {
      return (
        {...oldState, 
          listaDeProductos:[...oldState.listaDeProductos,producto],
          total: oldState.total + Number(producto.price)
        }
      )
    })
  }

  const handleRemoveFromCart = () => {
    setCart((oldState) => {
      const updatedProducts = oldState.listaDeProductos.filter(item => item.id !== producto.id);
      return {
        ...oldState,
        listaDeProductos: updatedProducts,
        total: oldState.total - Number(producto.price)
      }
    })
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image={producto.img}
        alt={producto.description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.name}
        </Typography>
        <Typography  variant="h5" color="text.primary">
          {producto.price}
        </Typography>
        <Button variant='contained' onClick={handleClick}>Agregar</Button>
        <span style={{ margin: '0 10px' }}></span>
        <Button variant='contained' onClick={handleRemoveFromCart}>Eliminar</Button>
        <Link to={`/categorias/${producto.category}`}>
          <Typography variant="body1" color="text.primary" paddingTop= "20px">
          Volver a {producto.category}
        </Typography>
        </Link>
       </CardContent>
    </CardActionArea>
  </Card>
);
}

export default ProductsItem 