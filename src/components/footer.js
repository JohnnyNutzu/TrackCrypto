import React from "react";
import './footer.css'
import { Grid } from "@mui/material";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import gecko from "../images/CoinGecko.jpg";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


// Display exchanges within a slider
export default function Footer() {

  return (
    <Grid className="footer" container gap={4} >
      <Grid item  xs={12} lg={4}>
        <Box>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding style={{fontSize:50}}>
                <ListItemButton>
                  <ListItemIcon>
                  <AiFillFacebook />
                  </ListItemIcon>
                  <ListItemText primary="Visit our Facebook" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding  style={{fontSize:50}}>
                <ListItemButton>
                  <ListItemIcon>
                    <AiFillInstagram />
                  </ListItemIcon>
                  <ListItemText primary="Watch us on Instagram" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Divider />
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding  style={{fontSize:50}}>
                <ListItemButton>
                <ListItemText primary="Stay on top of the news" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding  style={{fontSize:50}}>
                <ListItemButton component="a" href="#simple-list">
                <AiFillLinkedin /><ListItemText primary="Conect with us" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Grid>
      <Grid item xs={12} lg={4}>
        <div style={{ padding: 50 }}>
         <h3>Crypto-currency</h3>
         <p style={{fontSize: 30}}>Crypto-currency provides live cryptocurrency prices and charts, listed by crypto market cap. Get latest crypto prices and historical data for Bitcoin and thousands of altcoins.</p> 
        </div>
      </Grid>
      <Grid item xs={12} lg={2}>
      Powered by :
        <div className="footer-icons">
          
          <img className='gecko-image' src={gecko} alt="name" />
        </div>
      </Grid>
    </Grid>
  );
};
