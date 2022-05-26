import React,  { useEffect, useState } from "react";
import axios from "axios";
import "../Components/footer.css";
import { ExchangeList } from "../config/api";
import { Grid } from "@material-ui/core";
import { Slide, Zoom } from 'react-slideshow-image';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

// Display exchanges within a slider
export default function Footer() {
  const [ exchange, setExchange ] = useState()

  const fetchExchanges = async () => {
    const { data } = await axios.get(ExchangeList());
    setExchange(data)
  }
  useEffect(() => {
    fetchExchanges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });
 
  const properties = {
    duration: 5000,
    autoplay: true,
    arrows: false,
  };

  return (
    <Grid className="footer" container gap={4} >
      <Grid item xs={12} lg={4}  className="exchange-slide">
        <h3>Exchange</h3>
        <div>
          <Slide easing="ease" {...properties}>
            <div className="each-slide">
              <ol>
                <span className="exchange-icon">
                  <img src={exchange?.[0]['image']} alt={exchange?.[0]['name']}>
                  </img>
                </span>
                <div className="exchange-content">
                  <h2 className="exchange-main">{exchange?.[0]['name']}</h2>
                  <h3 className="exchange-sub">From :  {exchange?.[0]['country']}</h3>
                  {exchange?.[0]['year_established']}
                </div>
              </ol>
            </div>
            <div className="each-slide">
              <ol>
                <span className="exchange-icon">
                  <img src={exchange?.[1]['image']} alt={exchange?.[1]['name']}>
                  </img>
                </span>
                <div className="exchange-content">
                  <h2 className="exchange-main">{exchange?.[1]['name']}</h2>
                  <h3 className="exchange-sub">From :  {exchange?.[1]['country']}</h3>
                  {exchange?.[1]['year_established']}
                </div>
              </ol>
            </div>
            <div className="each-slide">
              <ol>
                <span className="exchange-icon">
                  <img src={exchange?.[2]['image']} alt={exchange?.[2]['name']}>
                  </img>
                </span>
                <div className="exchange-content">
                  <h2 className="exchange-main">{exchange?.[2]['name']}</h2>
                  <h3 className="exchange-sub">{exchange?.[2]['country']}</h3>
                  {exchange?.[2]['year_established']}
                </div>
              </ol>
            </div>
            <div className="each-slide">
              <ol>
                <span className="exchange-icon">
                  <img src={exchange?.[3]['image']} alt={exchange?.[3]['name']}></img>
                </span>
                <div className="exchange-content">
                  <h2 className="exchange-main">{exchange?.[3]['name']}</h2>
                  <h3 className="exchange-sub">From :  {exchange?.[3]['country']}</h3>
                  {exchange?.[3]['year_established']}
                </div>
              </ol>
            </div>
          </Slide>
        </div>
      </Grid>
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
          <div className="footer-icons">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillLinkedin />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
