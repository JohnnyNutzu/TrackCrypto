import React, {useState, useEffect } from 'react';
import axios from "axios";
import { Grid } from '@mui/material';
import './context.css';
import { Trending } from '../config/api';
import { FaCoins } from 'react-icons/fa';
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { RiNftLine } from "react-icons/ri";


const Context = () => {
  const [ trending , setTrending ] = useState()

    const fetchTrending = async () => {
      const { data } = await axios.get(Trending([]))
      console.log(data);
      setTrending(data);  
    };
    useEffect(() => {
      fetchTrending();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
  return (
  
  <div className='context-grid'>
    <Grid container className="menu-container" spacing={2} p={6}>
      <Grid item lg={4}>
        <div className='background-image'>
          <ul className="tred-info">
            <h1 className='sub-title'>Trending Coins<FaCoins style={{ marginLeft: 30, color: 'gold'}} /></h1>
              <li>
                <div>
                <span className="tred-icon">
                  <img src={trending?.coins[0]['item']['small']} alt= {trending?.coins[0]['item']['name']}/>
                </span>
                
                  <div className="tred-content">
                    <h2 className="tred-main">
                      {trending?.coins[0]['item']['name']}            
                    </h2>
                    <h3>
                      Mkt Cap: {trending?.coins[0]['item']['data']['market_cap']}
                    </h3>
                    <div className="tred-sub">
                      Price {trending?.coins[0]['item']['data']['price_24h_percentage_change'] < 0 ? (
                                <span className='red'><FaLongArrowAltDown />
                                  {trending?.coins[0]['item']['data']['price']}
                                </span>
                            ) : (
                                <span className='green'><FaLongArrowAltUp />
                                  {trending?.coins[0]['item']['data']['price']}
                                </span>
                                )}
                        <span className='tred-market'>
                          <img src={trending?.coins[0]['item']['data']['sparkline']} alt= {trending?.coins[0]['item']['name']}/>
                        </span> 
                    </div>
                  </div>
                </div>
              </li>
              <li>
              <div>
                  <span className="tred-icon">
                    <img src={trending?.coins[1]['item']['small']} alt= {trending?.coins[0]['item']['name']}/>
                  </span>
                  <div className="tred-content">
                    <h2 className="tred-main">
                      {trending?.coins[1]['item']['name']}
                    </h2>
                    <h3>
                    Mkt Cap: {trending?.coins[1]['item']['data']['market_cap']}
                    </h3>
                    <div className="tred-sub">
                    Price {trending?.coins[1]['item']['data']['price_24h_percentage_change'] < 0 ? (
                                <span className='red'><FaLongArrowAltDown />
                                  {trending?.coins[1]['item']['data']['price']}
                                </span>
                            ) : (
                                <span className='green'><FaLongArrowAltUp />
                                  {trending?.coins[1]['item']['data']['price']}
                                </span>
                                )}
                      <span className='tred-market'>
                        <img src={trending?.coins[1]['item']['data']['sparkline']} alt= {trending?.coins[1]['item']['name']}/>
                      </span> 
                    </div>
                  </div>
                </div>
              </li>
              <li>
              <div>
                  <span className="tred-icon">
                    <img src={trending?.coins[2]['item']['small']} alt= {trending?.coins[2]['item']['name']}/>
                  </span>
                  <div className="tred-content">
                    <h2 className="tred-main">
                      {trending?.coins[2]['item']['name']}
                    </h2>
                    <h3>
                    Mkt Cap: {trending?.coins[2]['item']['data']['market_cap']}
                    </h3>
                    <div className="tred-sub">
                    Price {trending?.coins[2]['item']['data']['price_24h_percentage_change'] < 0 ? (
                                <span className='red'><FaLongArrowAltDown />
                                  {trending?.coins[2]['item']['data']['price']}
                                </span>
                            ) : (
                                <span className='green'><FaLongArrowAltUp />
                                  {trending?.coins[2]['item']['data']['price']}
                                </span>
                                )}
                      <span className='tred-market'>
                        <img src={trending?.coins[2]['item']['data']['sparkline']} alt= {trending?.coins[2]['item']['name']}/>
                      </span> 
                    </div>  
                  </div>
                </div>
              </li>
              <li>
              <div>
                  <span className="tred-icon">
                    <img src={trending?.coins[3]['item']['small']} alt= {trending?.coins[3]['item']['name']}/>
                  </span>
                  <div className="tred-content">
                    <h2 className="tred-main">
                      {trending?.coins[3]['item']['name']}
                    </h2>
                    <h3>
                    Mkt Cap: {trending?.coins[3]['item']['data']['market_cap']}
                    </h3>
                    <div className="tred-sub">
                    Price {trending?.coins[3]['item']['data']['price_24h_percentage_change'] < 0 ? (
                                <span className='red'><FaLongArrowAltDown />
                                  {trending?.coins[3]['item']['data']['price']}
                                </span>
                            ) : (
                                <span className='green'><FaLongArrowAltUp />
                                  {trending?.coins[3]['item']['data']['price']}
                                </span>
                                )}
                      <span className='tred-market'>
                        <img src={trending?.coins[3]['item']['data']['sparkline']} alt= {trending?.coins[3]['item']['name']}/>
                      </span> 
                    </div>   
                  </div>
                </div>
              </li>
          </ul>
        </div>
      </Grid>
      <Grid item lg={4} >
        <div className='background-image'>
          <ul className='tred-info'>
          <h1 className='sub-title'>Trending Nfts<RiNftLine style={{ marginLeft: 30, color: 'gold'}} /></h1>
          <li>
            <div>
              <span className="tred-icon">
                <img src={trending?.nfts[0]['thumb']} alt= {trending?.nfts[0]['name']}></img>
              </span>
              <div className="tred-content">
                <h2 className="tred-main">
                  {trending?.nfts[0]['name']}
                </h2>
                <h3>
                  Native currency: {trending?.nfts[0]['native_currency_symbol']}
                </h3>
                <div className="tred-sub">Price:
                {trending?.nfts[0]['floor_price_24h_percentage_change'] < 0 ? (
                                <span className='red'><FaLongArrowAltDown />
                                  {trending?.nfts[0]['floor_price_24h_percentage_change'].toFixed(2)}
                                </span>
                            ) : (
                                <span className='green'><FaLongArrowAltUp />
                                  {trending?.nfts[0]['floor_price_24h_percentage_change'].toFixed(2)}
                                </span>
                                )}
                <span className='tred-market'>
                 <img src={trending?.nfts[0]['data']['sparkline']} alt= {trending?.nfts[0]['name']}/>
                </span>         
                </div>
              </div>
            </div>
          </li>
          <li>
            <div>
              <span className="tred-icon">
                <img src={trending?.nfts[1]['thumb']} alt= {trending?.nfts[1]['name']}></img>
              </span>
              <div className="tred-content">
                <h2 className="tred-main">
                  {trending?.nfts[1]['name']}
                </h2>
                <h3>
                  Native currency: {trending?.nfts[1]['native_currency_symbol']}
                </h3>
                <div className="tred-sub">Price:
                {trending?.nfts[1]['floor_price_24h_percentage_change'] < 0 ? (
                                <span className='red'><FaLongArrowAltDown />
                                  {trending?.nfts[1]['floor_price_24h_percentage_change'].toFixed(2)}
                                </span>
                            ) : (
                                <span className='green'><FaLongArrowAltUp />
                                  {trending?.nfts[1]['floor_price_24h_percentage_change'].toFixed(2)}
                                </span>
                                )}
                <span className='tred-market'>
                 <img src={trending?.nfts[1]['data']['sparkline']} alt= {trending?.nfts[1]['name']}/>
                </span>         
                </div>
              </div>
            </div>
          </li>
          <li>
            <div>
              <span className="tred-icon">
                <img src={trending?.nfts[2]['thumb']} alt= {trending?.nfts[2]['name']}></img>
              </span>
              <div className="tred-content">
                <h2 className="tred-main">
                  {trending?.nfts[2]['name']}
                </h2>
                <h3>
                  Native currency: {trending?.nfts[2]['native_currency_symbol']}
                </h3>
                <div className="tred-sub">Price:
                {trending?.nfts[2]['floor_price_24h_percentage_change'] < 0 ? (
                                <span className='red'><FaLongArrowAltDown />
                                  {trending?.nfts[2]['floor_price_24h_percentage_change'].toFixed(2)}
                                </span>
                            ) : (
                                <span className='green'><FaLongArrowAltUp />
                                  {trending?.nfts[2]['floor_price_24h_percentage_change'].toFixed(2)}
                                </span>
                                )}
                <span className='tred-market'>
                 <img src={trending?.nfts[2]['data']['sparkline']} alt= {trending?.nfts[2]['name']}/>
                </span>         
                </div>
              </div>
            </div>
          </li>
          <li>
            <div>
              <span className="tred-icon">
                <img src={trending?.nfts[3]['thumb']} alt= {trending?.nfts[3]['name']}></img>
              </span>
              <div className="tred-content">
                <h2 className="tred-main">
                  {trending?.nfts[3]['name']}
                </h2>
                <h3>
                  Native currency: {trending?.nfts[3]['native_currency_symbol']}
                </h3>
                <div className="tred-sub">Price:
                {trending?.nfts[3]['floor_price_24h_percentage_change'] < 0 ? (
                                <span className='red'><FaLongArrowAltDown />
                                  {trending?.nfts[3]['floor_price_24h_percentage_change'].toFixed(2)}
                                </span>
                            ) : (
                                <span className='green'><FaLongArrowAltUp />
                                  {trending?.nfts[3]['floor_price_24h_percentage_change'].toFixed(2)}
                                </span>
                                )}
                <span className='tred-market'>
                 <img src={trending?.nfts[3]['data']['sparkline']} alt= {trending?.nfts[3]['name']}/>
                </span>         
                </div>
              </div>
            </div>
          </li>
          </ul>

        </div>
        </Grid>
      </Grid>
      </div>
  
  )
}

export default Context;