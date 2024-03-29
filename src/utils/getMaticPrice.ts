import axios from 'axios';

const getMaticPrice = async () => {
  try {
    const response = await axios.get(
      'https://api.redstone.finance/prices?symbol=MATIC&provider=redstone&limit=1'
    );

    return response?.data[0] ? response.data[0].value : 0;
  } catch {
    return 0;
  }
};

export default getMaticPrice;
