import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function ItemListContainer() {
  return (
    <List sx={{ width: '100%', maxWidth: 200, bgcolor: '#A6c1FF', mt: "10px" }}>
      {['Buzos', 'Zapatillas', 'Remeras'].map((value) => (
        <Link to={value.toLowerCase()} key={value}>
          <ListItem key={value} disableGutters>
            <ListItemButton>
              <ListItemText primary={
                <Typography variant="body1" sx={{ color: 'white' }}>
                  {value}
                </Typography>
              } />
              <ListItemIcon>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}