import { ethers } from "hardhat";
const hre = require("hardhat");

async function main() {
  const [Deployer] = await hre.ethers.getSigners(); 
  console.log("ContinuousAudits deployed to:", Deployer.address);

  const EnergyAudit = await ethers.getContractFactory("EnergyAudit");
  const energyAudit = await EnergyAudit.deploy();
  console.log("EnergyAudit deployed to:", (energyAudit as any).address);

  const addresses = {
    EnergyAudit: energyAudit,
  };
  const fs = require("fs");
  fs.writeFileSync("deployedAddresses.json", JSON.stringify());
  console.log("Contract addresses written to deployedAddresses.json");
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
