import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
      <AppBar position="static">
        <Toolbar className='container'>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>   
          <Link to="/">White Tower</Link>
          </Typography>
          <ul className='containerUl'>
            <Link to= "/"><Typography component="li">Home</Typography></Link>
            <Link to= "/categorias"><Typography component="li">Categorias</Typography></Link>
            <Link to= "/contacto"><Typography component="li">Contacto</Typography></Link>
          </ul>
          <CartWidget />
        </Toolbar>       
      </AppBar>
  );
}

export default NavBar

