import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trending, Categories } from "../config/api";
import { Grid } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser"
import "../Pages/page.css"
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCoins } from 'react-icons/fa'
import { MdCategory } from 'react-icons/md'

// Display trending coins and a few categories
export default function Context() {
  const [ trending , setTrending] = useState()
  const [ category , setCategories] = useState()

  const fetchTrending = async () => {
    const { data } = await axios.get(Trending([]))
    console.log(data);
    setTrending(data);  
  };
  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCategories = async () => {
    const { data } = await axios.get(Categories([]))
    console.log(data);
    setCategories(data);  
  };
  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
        <hr className="rounded"></hr>
      <Grid container className="menu-container" spacing={5}>
      <Grid className="trending" item lg={4} >
        <ul className="tred-info">
        <h3 style={{ fontFamily: 'Georgia' }}>Trending 4 Coins<FaCoins style={{ marginLeft: 30, color: 'gold'}} /></h3>
          <li>
            <div>
              <span className="tred-icon">
                <img src={trending?.coins[0]['item']['small']} alt= {trending?.coins[0]['item']['name']}></img>
              </span>
              <div className="tred-content">
                <h2 className="tred-main">
                  {trending?.coins[0]['item']['name']}
                </h2>
                <h3 className="tred-sub">
                  Mkt Rank: {trending?.coins[0]['item']['market_cap_rank']}
                </h3>
                <h6 className="tred-sub">
                  {trending?.coins[0]['item']['price_btc'].toFixed(4)} btc
                </h6>
              </div>
            </div>
          </li>
          <li>
            <div>
              <span className="tred-icon">
                <img src={trending?.coins[1]['item']['small']} alt= {trending?.coins[1]['item']['name']}></img>
              </span>
              <div className="tred-content">
                <h2 className="tred-main">
                  {trending?.coins[1]['item']['name']}
                </h2>
                <h3 className="tred-sub">
                  Mkt Rank: {trending?.coins[1]['item']['market_cap_rank']}
                </h3>
                <h6 className="tred-sub">
                  {trending?.coins[1]['item']['price_btc'].toFixed(4)} btc
                </h6>
              </div>
            </div>
          </li>
          <li>
            <div>
              <span className="tred-icon">
                <img src={trending?.coins[2]['item']['small']} alt= {trending?.coins[2]['item']['name']}></img>
              </span>
              <div className="tred-content">
                <h2 className="tred-main">
                  {trending?.coins[2]['item']['name']}
                </h2>
                <h3 className="tred-sub">
                  Mkt Rank: {trending?.coins[2]['item']['market_cap_rank']}
                </h3>
                <h6 className="tred-sub">
                  {trending?.coins[2]['item']['price_btc'].toFixed(4)} btc
                </h6>
              </div>
            </div>
          </li>
          <li>
            <div>
              <span className="tred-icon">
                <img src={trending?.coins[3]['item']['small']} alt= {trending?.coins[3]['item']['name']}></img>
              </span>
              <div className="tred-content">
                <h2 className="tred-main">
                  {trending?.coins[3]['item']['name']}
                </h2>
                <h3 className="tred-sub">
                  Mkt Rank: {trending?.coins[3]['item']['market_cap_rank']}
                </h3>
                <h6 className="tred-sub">
                  {trending?.coins[3]['item']['price_btc'].toFixed(4)} btc
                </h6>
              </div>
            </div>
          </li>
        </ul>
        </Grid>

        <Grid item lg={8}>
        <div className="wrapper">
        <h3 style={{ alignItems: 'center', fontFamily: 'Georgia'}}>Categories by Market Cap <MdCategory style={{ color: 'gold' }} /></h3>
          <ul className="cubes">
            <li className="category">
              <div className="holder">
                <div className="category-content">{ReactHtmlParser(category?.[0].content.split(', '))}</div>
                  <div className="info">
                    <header>
                      <h1>{category?.[0].name}</h1>
                        <span className="rating">
                          {category?.[0].market_cap_change_24h < 0 ? (
                          <span className='red'>
                            {category?.[0].market_cap_change_24h.toFixed(2)}%
                          </span>
                          ) : (
                          <span className='green'>
                            {category?.[0].market_cap_change_24h.toFixed(2)}%
                          </span>
                          )}
                        </span>
                    </header>
                      <h5>Top 3 Coins</h5>
                        <p>
                          <img src={category?.[0].top_3_coins[0]} alt={category?.[0].name}></img>
                          <img src={category?.[0].top_3_coins[1]} alt={category?.[0].name}></img>
                          <img src={category?.[0].top_3_coins[2]} alt={category?.[0].name}></img>
                        </p>
                        <p></p>
                  </div>
              </div>
            </li>
            <li className="category">
              <div className="holder">
                <div className="category-content">{ReactHtmlParser(category?.[1].content.split(', '))}</div>
                  <div className="info">
                    <header>
                      <h1>{category?.[1].name}</h1>
                      <span className="rating">
                      {category?.[1].market_cap_change_24h < 0 ? (
                            <span className='red'>
                              {category?.[1].market_cap_change_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                              {category?.[1].market_cap_change_24h.toFixed(2)}%
                            </span>
                            )}
                      </span>                     
                      </header>
                      <h5>Top 3 Coins</h5>
                      <p><img src={category?.[1].top_3_coins[0]} alt={category?.[1].name}></img>
                      <img src={category?.[1].top_3_coins[1]} alt={category?.[1].name}></img>
                      <img src={category?.[1].top_3_coins[2]} alt={category?.[1].name}></img></p>
                      <p></p>
                </div>
              </div>
            </li>
            <li className="category">
              <div className="holder">
                <div className="category-content">{ReactHtmlParser(category?.[5].content.split(', '))}</div>
                  <div className="info">
                    <header>
                      <h1>{category?.[5].name}</h1>
                      <span className="rating">
                      {category?.[5].market_cap_change_24h < 0 ? (
                            <span className='red'>
                              {category?.[5].market_cap_change_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                              {category?.[5].market_cap_change_24h.toFixed(2)}%
                            </span>
                            )}
                      </span>
                      </header>
                      <h5>Top 3 Coins</h5>
                      <p><img src={category?.[5].top_3_coins[0]} alt={category?.[5].name}></img>
                      <img src={category?.[5].top_3_coins[1]} alt={category?.[5].name}></img>
                      <img src={category?.[5].top_3_coins[2]} alt={category?.[5].name}></img></p>
                      <p></p>
                </div>
              </div>
            </li>   
          </ul> 
        </div>
        </Grid>
      </Grid>
      <hr className="rounded"></hr>
   </div>
  )
  }

