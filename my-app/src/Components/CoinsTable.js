import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import axios from "axios";
import { CoinList } from "../config/api";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import "../Components/coins.css";
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import {
  TableCell,
  LinearProgress,
  TableBody,
  TableRow,
  TableContainer,
  Table,
  Paper,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";
import { BsCurrencyBitcoin } from 'react-icons/bs'
import { CTooltip } from '@coreui/react'

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
//search display all coins and navigate individually
export default function CoinsTable() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { currency, symbol } = CryptoState();

  const useStyles = makeStyles({
    row: {
      cursor: "pointer",
      height: 20,
      "&:hover": {
        backgroundColor: "#778899",
      },
      fontFamily: "Georgia",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "gold",
      },
    },
  });

  const classes = useStyles();
  const navigate = useNavigate();

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);
    setCoins(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  //search for coin
  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <Grid className="grid-container" container>
      <Grid item xs={12} lg={4}>
        <Typography variant="h6" style={{ margin: 18, fontFamily: "Georgia", align: 'center' }}>
            Track your Crypto<BsCurrencyBitcoin style={{ color: 'gold' }} />
        </Typography>
        <TextField label="Search" variant="outlined"  style={{  width: 400}} onChange={(e) => setSearch(e.target.value)}/>
        <div id="phone"></div>
      </Grid>
      <Grid className="table-coins" item xs={12} lg={8} style={{ textAlign: "center" }}>
        <h3 style={{ fontFamily:"Georgia" }}>Top coins by market value</h3>
        <TableContainer component={Paper}>
          {loading ? (<LinearProgress style={{ backgroundColor: "gold" }} />) : (
            <Table aria-label="simple table">
              <TableBody>{handleSearch().slice((page - 1) * 6, (page - 1) * 6 + 6).map((row) => { 
                    return (
                      <TableRow onClick={() => navigate(`/coins/${row.id}`)}  className={classes.row}  key={row.name}>
                        <TableCell component='th' scope="row" style={{  display: "flex" }}>
                          <img src={row?.image}  alt={row.name}  height="30" />
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <span style={{ color: "darkgrey" }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell  align="right" >
                          <CTooltip
                                content="Price change percentage in 24h"
                                placement="top"
                            >
                              {row.price_change_percentage_24h < 0 ? (
                                <span className='red'><FiArrowDown />
                                  {row.price_change_percentage_24h.toFixed(2)}%
                                </span>
                            ) : (
                                <span className='green'><FiArrowUpRight />
                                  {row.price_change_percentage_24h.toFixed(2)}%
                                </span>
                                )}
                          </CTooltip>
                        </TableCell>
                        <TableCell  align="right" >
                          <CTooltip
                              content="Markte Cap change percentage in 24h"
                              placement="top"
                          >
                            {row.market_cap_change_percentage_24h < 0 ? (
                              <span className='red'><FiArrowDown />
                                {row.market_cap_change_percentage_24h.toFixed(2)}
                              </span>
                          ) : (
                              <span className='green'><FiArrowUpRight />
                                {row.market_cap_change_percentage_24h.toFixed(2)}
                              </span>
                            )}
                          </CTooltip>
                        </TableCell>
                        <TableCell className="market-cap" align="right">
                            {symbol}{" "}
                            {numberWithCommas(
                              row.market_cap.toString().slice(0, -6)
                            )}
                            M
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        <Pagination
          count={(handleSearch()?.length / 6).toFixed(0)}
          style={{padding: 20, width: "100%", display: "flex", justifyContent: "center"}} classes={{ ul: classes.pagination }}
          onChange={(_, value) => {setPage(value); window.scroll(0, 450); }}
        />
      </Grid>                
    </Grid>
  );
}