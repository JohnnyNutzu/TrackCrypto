export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&x_cg_demo_api_key=CG-fyF8h4c9MDwCWapmcvzDWaJV`;

export const SingleCoin = (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}?x_cg_demo_api_key=CG-fyF8h4c9MDwCWapmcvzDWaJV`;

  export const HistoricalChart = (id, days = 730, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}?x_cg_demo_api_key=CG-fyF8h4c9MDwCWapmcvzDWaJV`;

export const Trending = () => 
  'https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-fyF8h4c9MDwCWapmcvzDWaJV';

export const Global = () =>
  'https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=CG-fyF8h4c9MDwCWapmcvzDWaJV';

 export default CoinList;






