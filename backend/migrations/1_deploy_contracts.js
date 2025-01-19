const CarbonCreditMarketplace = artifacts.require("CarbonCreditMarketplace");

module.exports = async function (deployer) {
  // Deploy the CarbonCreditMarketplace contract
  await deployer.deploy(CarbonCreditMarketplace);
  const marketplaceInstance = await CarbonCreditMarketplace.deployed();

  console.log(`CarbonCreditMarketplace deployed at address: ${marketplaceInstance.address}`);

  // If you have any additional setup, such as initializing values, you can add them here.
  // Example:
  // await marketplaceInstance.initializeSomeData();
};
