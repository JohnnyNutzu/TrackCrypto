import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from "../config/api";
import "chart.js/auto";
import { Line } from "react-chartjs-2";
import {
  CircularProgress, Button 
} from "@mui/material";
import { chartDays } from "../config/data";
import { CryptoState } from "../cryptocontext";
import './coins.css'


const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState();
  const [days, setDays] = useState(1);
  const { currency } = CryptoState();
  const [flag,setflag] = useState(false);



  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency),{
      headers: {
        'getContentType': 'application/json',
        'charset':'utf-8', 
      }
    });
    setflag(true);
    setHistoricData(data.prices);
  };

  console.log(coin);

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (

      <div className="coin-line">
        {!historicData | flag===false ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={250}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#BAE28B",
                    fill: true,
                    font:{
                      size:30,
                    }
                  },
                ],
              }}
                options={{
                  elements: {
                    point: {
                      radius: 3,
                      hoverRadius: 20,
                    },
                  },
                  layout: {
                    padding: 30,
                  },
                  plugins: {
                    legend: {
                        labels: {
                            // This more specific font property overrides the global property
                            font: {
                                size: 30,
                            },
                        },
                    },
                  },
                }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <Button
                  key={day.value}
                  onClick={() => {setDays(day.value);
                    setflag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </Button>
              ))}
            </div>
          </>
        )}
      </div>

  );
};

export default CoinInfo;