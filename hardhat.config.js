require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/9df6818a4d8b4ba1a7e248cd56122a8e",
      accounts: [`0x99494c6abfd7f2ccb3c6f2e5e72cda531acd5b3189e2a04b28f9660697b12800`]
    }
  }
};
