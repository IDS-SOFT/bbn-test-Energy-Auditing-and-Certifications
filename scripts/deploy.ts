// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.



const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
//(string memory _scope, string memory _criteria, uint _timeline, address _energyCompany, address _consumer) {

  const EnergyAudit = await hre.ethers.getContractFactory("EnergyAudit");
  const energyAudit = await EnergyAudit.deploy("abc","srs",100,"0xdD2FD4581271e230360230F9337D5c0430Bf44C0","0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");

  await energyAudit.deployed();

  console.log("EnergyAudit contract deployed to:", energyAudit.address);

  // Store the contract addresses for later use
  const addresses = {
    energyAudit: energyAudit.address,
  };

  // Store the contract addresses in a JSON file for easy access
  const fs = require("fs");
  fs.writeFileSync("deployedAddresses.json", JSON.stringify(addresses, null, 2));
  console.log("Contract addresses written to deployedAddresses.json");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });