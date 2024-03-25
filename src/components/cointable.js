import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { Pagination } from '@mui/material';
import CoinList from "../config/api";
import { CryptoState } from '../cryptocontext';
import { CircularProgress, TextField } from '@mui/material';
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import './coins.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function Cointable() {

    const [coins , setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const { currency, symbol } = CryptoState();


    const fetchCoins = async () => {
      
        setLoading(true);
        const { data } = await axios.get(CoinList(currency), {
          headers: {
            'access-control-allow-methods':'GET',
            'access-control-allow-origin'	:	'*',
            'accept': 'application/json', 
          }
        });
      
        console.log(data);
        setCoins(data);
        setLoading(false);
      };
    
   
      useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        fetchCoins();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currency]);

      const handleSearch = () => {
        return coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search) ||
            coin.symbol.toLowerCase().includes(search)
        );
      };
      const navigate = useNavigate()
    

  return (
    <div className='coins-table'>
      <h1>
         <p>Our whispers echoed through the ether</p>
          <p>A symphony of secrets, a code-sealed theater</p>
      </h1>
      <h1>Top 150 coins by market cap</h1>
      <TextField label="Search" variant="outlined"  style={{ width: 600}} onChange={(e) => setSearch(e.target.value)}/>
      <TableContainer component={Paper} elevation={3} padding={3}>
          {loading ? (<CircularProgress />) : (
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell>Market Rank</TableCell>
              <TableCell align='left'>Name</TableCell>
              <TableCell align="right">Current Price</TableCell>
              <TableCell align="right">Market Cap/24h</TableCell>
              <TableCell align="right">Price/24h</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {handleSearch().slice((page - 1) * 10, (page - 1) * 10 + 10).map((row) => (
              <TableRow
                onClick={() => navigate(`/coins/${row.id}`)}  key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, maxWidth:30 }}
              >
                <TableCell className='image-container'>{row?.market_cap_rank}<img src={row?.image}  alt={row?.name} /></TableCell>
                <TableCell style={{fontSize: 50}} align="left"> {row?.name}</TableCell>
                <TableCell style={{fontSize: 20}} align="right">
                {numberWithCommas(row?.current_price.toFixed(2))}{symbol}
                </TableCell>
                <TableCell style={{fontSize: 20}} align="right">
                {row?.market_cap_change_percentage_24h < 0 ? (
                                <span className='red'><FaLongArrowAltDown />
                                  {row.market_cap_change_percentage_24h.toFixed(2)}
                                </span>
                            ) : (
                                <span className='green'><FaLongArrowAltUp />
                                  {row.market_cap_change_percentage_24h.toFixed(2)}
                                </span>
                              )}
                </TableCell>
                <TableCell style={{fontSize: 20}} align="right">
                {row?.price_change_percentage_24h < 0 ? (
                                  <span className='red'><FaLongArrowAltDown />
                                    {row.price_change_percentage_24h.toFixed(2)}%
                                  </span>
                              ) : (
                                  <span className='green'><FaLongArrowAltUp />
                                    {row.price_change_percentage_24h.toFixed(2)}%
                                  </span>
                                  )}                
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
          )}
          <Pagination
            count={(handleSearch()?.length / 10).toFixed(0)}
            style={{
              padding: 20,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            onChange={(_, value) => {
              setPage(value);
              window.scroll(0, 450);
            }}
          />
          
      </TableContainer>
  </div>

  )
}

export default Cointable;