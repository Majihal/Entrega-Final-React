import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import NavBar from '../component/Navbar/NavBar.jsx';
import "./ProductList.css"
import CardComponent from "../component/CardComponent/CardComponent.jsx"
import { Typography } from '@mui/material';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebaseConfig.js'

const ProductList =  () => {
  const [productosPorCategoria, setProductosPorCategoria] = useState([])
  let { categoriaSeleccionada } = useParams();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getDb = async () => {
      const q = query(collection(db, "productos"), where("category", "==", categoriaSeleccionada));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProductosPorCategoria(docs)
      setLoading(false)
    }
    getDb()
  },[])
  return (
    <div>
      <NavBar/>
      <Typography variant= "h4" className='Products'>Lista de Productos</Typography>
      <div className='Products'>
         { loading 
          ? "loading..."  
          : (productosPorCategoria.map(item => (
              <div key={item.id}>  
                  <CardComponent className= "Products" item={item}/>
              </div>
            )))
          }
          </div> 
    </div>
)}

export default ProductList