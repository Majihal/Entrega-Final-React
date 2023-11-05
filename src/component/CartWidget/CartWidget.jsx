import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import React, {useContext} from 'react'
import cartContext from '../../store/cartContext';
import {Link} from 'react-router-dom'

export const CartWidget = () => {
  const{cart}=useContext(cartContext)
  return (
    <Badge badgeContent={cart.listaDeProductos.length} color="error">
      <Link  to='/checkout' >
        <ShoppingCartIcon />
      </Link>
    </Badge>
  )
}
