import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from "react-router-dom"


export default function ActionAreaCard({item}) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to={`/categorias/${item.category}/${item.id}`}> 
          <CardMedia
            component="img"
            height= '500'
            image={item.img}
            alt={item.description}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Link to= "/categorias/">
            <Typography variant="body1" color="text.primary" paddingTop="20px" >
              Volver
            </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
