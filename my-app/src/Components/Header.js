import React, { useState, useEffect } from "react";
import axios from "axios";
import { Global } from "../config/api"
import {
  MenuItem,
  Select,
  Grid,
} from "@material-ui/core";
import { CryptoState } from "../CryptoContext";
import "./navbar.css"
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import { CButton } from '@coreui/react';

// Navbar with slideshow about global information and a button for currency
function Header() {
  const { currency, setCurrency } = CryptoState();
  const [ global, setGlobal ] = useState()

  const fetchGlobal = async () => {
    const { data } = await axios.get(Global());
    setGlobal(data);
    };
    useEffect(() => {
      fetchGlobal();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  const properties = {
    duration: 3000,
    autoplay: true,
    arrows: false,
  };

  return (
    <Grid container className="navbar">
      <Grid item lg={4}>
        <div className="title">
            <a href="/" style={{ textDecoration: "none" }}>
                <div className="letter">C</div>
                <p className="letter-side">rypto</p>
                <p className="currency">currency</p> 
            </a>
        </div>
      </Grid>
      <Grid item lg={4}>
        <div className="Global">
         <Slide easing="ease" {...properties}>
          <div className="each-slide">
            <div>
              <div>Markets</div>
              <span><CButton color="warning">{global?.data.markets}</CButton></span>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <div> Active Crypto</div>
              <span><CButton color="warning">{global?.data.active_cryptocurrencies}</CButton></span>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <span><CButton color="warning">Last 24h</CButton>
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
              <span><CButton color="warning">{global?.data.market_cap_percentage['btc'].toFixed(3)}%</CButton></span>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <div>Ethereum</div>
              <span><CButton color="warning">{global?.data.market_cap_percentage['eth'].toFixed(3)}%</CButton></span>
            </div>
          </div>
          <div className="each-slide">
            <div>
              <div>Tether</div>
              <span><CButton color="warning">{global?.data.market_cap_percentage['usdt'].toFixed(3)}%</CButton></span>
            </div>
          </div>
          </Slide>
        </div>
      </Grid>
        <Grid item lg={2}>
        <div id="setCurrency" >
        <Select
            variant="outlined"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency}
            style={{ width: 100, height: 50, marginRight: 10}}
            onChange={(e) => setCurrency(e.target.value)}
        
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"GBP"}>GBP</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
          </Select>
          </div>
        </Grid> 
    </Grid>
  )
}

export default Header;