export const CoinList = (currency) =>
  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=150&page=1&sparkline=false`;

export const SingleCoin= (id) =>
  `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 730, currency) =>
  `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const ExchangeList = () =>
  'https://api.coingecko.com/api/v3/exchanges?per_page=5&page=1';

export const Global = () => 
  `https://api.coingecko.com/api/v3/global`;

export const Categories = () => 
 'https://api.coingecko.com/api/v3/coins/categories';

 export const Trending = () => 
 'https://api.coingecko.com/api/v3/search/trending';

