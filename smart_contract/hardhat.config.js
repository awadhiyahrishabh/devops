//https://eth-ropsten.alchemyapi.io/v2/1SuxpzDqKuLL_2W--O45HNwcMReW_S--
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/1SuxpzDqKuLL_2W--O45HNwcMReW_S--',
      accounts: ['f25285540d461ce8e73a374206cf8d65bfe53739ed5f2f29118c3ec7afa3f0a5'],
    },
  },
};