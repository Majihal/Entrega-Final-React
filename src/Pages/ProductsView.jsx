import React, { useEffect, useState } from 'react'
import ProductsItem from '../component/Products/Products'
import NavBar from '../component/Navbar/NavBar'
import { useParams } from 'react-router-dom';
import "./ProductList.css"
import ".././component/Products/Products.css"
import { Typography } from '@mui/material';

import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig.js'



const ProductsView = () => {
  const [productoData, setProductoData] = useState ([])
  let {id} = useParams();

  useEffect (() => {
    const getProducto = async () => {
      const q = query (
        collection(db, "productos"),
        where(documentId(), "==", id)
      );
        const docs = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          docs.push ({...doc.data(), id: doc.id})
        })

        setProductoData(docs);
    }
    getProducto()

  },[])

  return (
    <div>
      <NavBar/>
      <Typography variant= "h4" className='Prod'>Producto</Typography>
      <div className='Products'>
        {productoData.map((producto) => {
          return   <ProductsItem producto={producto} key= {producto.id}/>

        })}
    
      </div>
    </div>
  )
}

export default ProductsView
