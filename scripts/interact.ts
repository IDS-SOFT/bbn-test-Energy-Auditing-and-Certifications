import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
import { ethers, providers } from "ethers";
const hre = require("hardhat");
const EnergyAudit = require("./../artifacts/contracts/Energy_Auditing.sol/EnergyAudit.json");
//const ContinuousAudits = require("./../artifacts/contracts/Continuous_Audits.sol/Lock.json");

const contractAddress: string = process.env.CONTRACT_ADDRESS || "";
const contractABI: any[] = EnergyAudit.abi;

async function main() {
//   const provider = new ethers.JsonRpcProvider(process.env.RPC_NODE_URL || "");
const provider = new providers.JsonRpcProvider(process.env.RPC_NODE_URL || "");  
const signer = await hre.ethers.getSigner();
  const contract = new ethers.Contract(contractAddress, contractABI, signer);

  try {
    // Call functions here
    const createContract = await contract.certifyRenewableEnergy();
  await createContract.wait();
  console.log("product created");
  console.log("The transaction hash is:", createContract.hash);
  const receipt = await createContract.wait();
  console.log(
    "The transaction returned the following transaction receipt:\n",
    receipt,
  );
  
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
