import React from "react";
import './footer.css'
import { Grid } from "@mui/material";
import { Zoom } from 'react-slideshow-image';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import gecko from "../images/CoinGecko.jpg";

// Display exchanges within a slider
export default function Footer() {

  const properties = {
    duration: 5000,
    autoplay: true,
    arrows: false,
  };

  return (
    <Grid className="footer" container gap={4} >
      <Grid item  xs={12} lg={4} gridcolumn="span 4" className="zoom-info">
      <div style={{padding: 50}}>
        <Zoom scale={0.4} {...properties}>
            <div>
              <p style={{ fontFamily: 'Georgia'}}>A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.</p>
            </div>
            <div >
              <p style={{ fontFamily: 'Georgia'}}>A cryptocurrency is a tradable digital asset or digital form of money, built on blockchain technology that only exists online. Cryptocurrencies use encryption to authenticate and protect transactions, hence their name. There are currently over a thousand different cryptocurrencies in the world.</p>
            </div>
            <div>
              <p style={{fontFamily: 'Georgia'}}>Despite their name, cryptocurrencies are not necessarily considered to be currencies in the traditional sense and while varying categorical treatments have been applied to them, including classification as commodities, securities, as well as currencies, cryptocurrencies are generally viewed as a distinct asset class in practice.</p>
            </div>
        </Zoom>
      </div>
        
      </Grid>
      <Grid item xs={12} lg={4} gridcolumn="span 8" className="icons">
        <div style={{ padding: 50 }}>
         <h3>Crypto-currency</h3>
         <p>Crypto-currency provides live cryptocurrency prices and charts, listed by crypto market cap. Get latest crypto prices and historical data for Bitcoin and thousands of altcoins.</p>
          
        </div>
      </Grid>
      <Grid>
        <div className="footer-icons">
          <AiFillFacebook />
          <AiFillInstagram />
          <AiFillLinkedin />
          <img className='gecko-image' src={gecko} alt="name" />
        </div>
      </Grid>
    </Grid>
  );
};
