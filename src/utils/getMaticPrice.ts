import axios from 'axios';

const getCoingeckoPrice = async () => {
  try {
    // MATIC address
    const address = '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270';
    const response = await axios('https://api.coingecko.com/api/v3/simple/token_price/polygon-pos', {
      params: {
        contract_addresses: address,
        vs_currencies: 'usd'
      }
    });

    return response.data[address].usd;
  } catch {
    return 0;
  }
};

export default getCoingeckoPrice;
