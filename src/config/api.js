export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

  export const HistoricalChart = (id, days = 365, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const ExchangeList = () =>
  'https://api.coingecko.com/api/v3/exchanges?per_page=5&page=1';

export const Global = () => 
  `https://api.coingecko.com/api/v3/global`;


export const Trending = () => 
 'https://api.coingecko.com/api/v3/search/trending';

 export default CoinList;





