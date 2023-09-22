//SPDX-License-Identifier:GPL-3.0
pragma solidity ^0.8.0;

contract EnergyAudit {
    // Define the terms of the contract
    string public scope;
    string public criteria;
    uint public timeline;

    // Define the certification criteria
    bool public renewableEnergy;
    bool public energyEfficiency;
    bool public carbonFootprint;

    // Define the parties involved
    address public energyCompany;
    address public consumer;

    // Define the constructor function
    constructor(string memory _scope, string memory _criteria, uint _timeline, address _energyCompany, address _consumer) {
        scope = _scope;
        criteria = _criteria;
        timeline = _timeline;
        energyCompany = _energyCompany;
        consumer = _consumer;
    }

    // Define the function for certifying renewable energy sources
    function certifyRenewableEnergy() public {
        require(msg.sender == energyCompany, "Only the energy company can certify renewable energy sources");
        renewableEnergy = true;
    }

    // Define the function for certifying energy efficiency
    function certifyEnergyEfficiency() public {
        require(msg.sender == energyCompany, "Only the energy company can certify energy efficiency");
        energyEfficiency = true;
    }

    // Define the function for certifying carbon footprint
    function certifyCarbonFootprint() public {
        require(msg.sender == energyCompany, "Only the energy company can certify carbon footprint");
        carbonFootprint = true;
    }

    // Define the function for checking certification status
    function checkCertificationStatus() public view returns (bool, bool, bool) {
        return (renewableEnergy, energyEfficiency, carbonFootprint);
    }
}