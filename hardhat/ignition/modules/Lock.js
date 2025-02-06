// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("LockModule", (m) => {
    const cert=m.contract("Cert", [["0xBD9FfFa80c5dCB761Cb46ab2ab0211B8D82f41db","0x3219E5eE745769f468f324E8e5Bc4a4b9E572F93"]]);
    return {cert};
});
