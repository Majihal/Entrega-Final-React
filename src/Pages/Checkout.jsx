import NavBar from "../component/Navbar/NavBar";
import React, { useState, useContext } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import cartContext from "../store/cartContext";

const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const [purchaseID, setPurchaseID] = useState("");
  const{cart, setCart}=useContext(cartContext)


  const [formValues, setFormValues] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const docRef = await addDoc(collection(db, "compras"), {
      formValues, cart
    });
    setPurchaseID(docRef.id);
    if (docRef.id) {
      setCart({
        listaDeProductos: [], 
        total: 0, 
      }) 
    }
  };

 const handleDeleteCart = () => {
  setCart({
    listaDeProductos: [], 
    total: 0, 
  }) 
 }

  return (
    <>
      <NavBar/>
      <Container maxWidth="xs">
        {purchaseID ?   (<Typography className="Prod" variant= "h5">Tu id de compra es :{purchaseID} </Typography>) : ( <Box> <Typography className="Prod" variant= "h4">Finalizar Compra</Typography> <Typography className="Prod" variant= "h5">Cantidad: {cart.listaDeProductos.length}</Typography>
      <Typography className="Prod" variant= "h5">Precio total: ${cart.total}</Typography><Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="first_name"
            label="First Name"
            name="first_name"
            autoComplete="fname"
            autoFocus
            value={formValues.first_name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="last_name"
            label="Last Name"
            name="last_name"
            autoComplete="lname"
            value={formValues.last_name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? 'Loading...' : 'Comprar'}
          </Button>
          <Button variant='outlined' onClick={handleDeleteCart}>Eliminar todos los productos</Button>
        </Box> </Box> )  }
      </Container>
  </>
  );
};

export default Checkout;