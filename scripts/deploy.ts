import { ethers } from "hardhat";
const hre = require("hardhat");

async function main() {
  const [Deployer] = await hre.ethers.getSigners(); 
  console.log("ContinuousAudits deployed to:", Deployer.address);

  const EnergyAudit = await ethers.getContractFactory("EnergyAudit");
  const energyAudit = await EnergyAudit.deploy("abc","srs",100,"0xdD2FD4581271e230360230F9337D5c0430Bf44C0","0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");
  console.log("EnergyAudit deployed to:", (energyAudit as any).address);

  const addresses = {
    EnergyAudit: energyAudit,
  };
  const fs = require("fs");
  fs.writeFileSync("deployedAddresses.json", JSON.stringify("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199", null, 2));
  console.log("Contract addresses written to deployedAddresses.json");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
