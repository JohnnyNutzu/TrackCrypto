import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Global } from "../config/api"
import { CryptoState } from '../cryptocontext';
import { Select, MenuItem, Grid } from '@mui/material';
import './header.css';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';

function Header  () {
  const { currency, setCurrency } = CryptoState()
  const [ global, setGlobal ] = useState()
  const [open, setOpen] = React.useState(false);

  const fetchGlobal = async () => {
    const { data } = await axios.get(Global(), {
      headers: {
        'accept': 'application/json'
      }
    });
    setGlobal(data);
    };
    useEffect(() => {
      fetchGlobal();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // snackbar config
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          Close
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
        </IconButton>
      </React.Fragment>
    );

  const properties = {
    duration: 4000,
    autoplay: true,
    arrows: false,
  };

  
  return (
     <Grid container spacing={3} className="navbar">
      <Grid item xs={2}>
      <div className="title">
            <a href="/" style={{ textDecoration: "none" }}>
                <div className="letter">C</div>
                <p className="letter-side">rypto</p>
                <p className="currency">currency</p> 
            </a>
        </div>
      </Grid>
        
    
      <Grid item xs={10} md={8} lg={9}>
        <div className="global">
         <Slide easing="ease" {...properties}>
          <div className="each-slide">
            <div style={{color:'gold'}}>
              <div>Markets:</div>
              {global?.data.markets}
            </div>
          </div>
          <div className="each-slide">
            <div style={{color:'gold'}}>
              <div> Active Crypto:</div>
              {global?.data.active_cryptocurrencies}
            </div>
          </div>
          <div className="each-slide">
            <div>
              <span>Last 24h:
              {global?.data.market_cap_change_percentage_24h_usd < 0 ? (
                <span className='red'><FiArrowDown />
                    {global?.data.market_cap_change_percentage_24h_usd.toFixed(2)}%
                </span>
                    ) : (
                <span className='green'><FiArrowUpRight />
                    {global?.data.market_cap_change_percentage_24h_usd.toFixed(2)}%
                </span>
                    )}
                </span>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <div>Bitcoin</div>
              <span style={{color:'goldenrod'}}>{global?.data.market_cap_percentage['btc'].toFixed(3)}%</span>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <div>Ethereum</div>
              <span style={{color:'goldenrod'}}>{global?.data.market_cap_percentage['eth'].toFixed(3)}%</span>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <div>Tether</div>
              <span style={{color:'goldenrod'}}>{global?.data.market_cap_percentage['usdt'].toFixed(3)}%</span>
            </div>
          </div>
          </Slide>
        </div>
      </Grid>
        <Grid item md={1} lg={1}>
        <div className="set-currency" >
        <Select
            onClick={handleClick}
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            style={{ width: 100, height: 50}}
            onChange={(e) => setCurrency(e.target.value)}
        
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"GBP"}>GBP</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
          </Select>
        <Snackbar open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          action={action}
       >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Currency Changed!
        </Alert>
        </Snackbar>
          </div>
        </Grid> 
    </Grid>
  )
}


export default Header;