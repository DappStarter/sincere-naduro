require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note ridge clutch install nature slot gaze'; 
let testAccounts = [
"0x418c40b989c80175c59fd6409698a7b3eb3ab043181a2a9c6684b9ff842d9093",
"0xd7e8bc6481a27bc6e574165b76e091dc8ab6f3162c3950b8e381bb5556898180",
"0x6934953b84f28d994f845c9897befb40af02795a2a15133435c2c83ef9499c3f",
"0x2853cae68109d9df9a72d091b9596b0a9aa05ef91d19e849978529c205631c00",
"0x8586d350551a1cc76e79935f0dd7cc1ab6c29e4fbf31d2859b754d7c6e20d6da",
"0x8d82e38904da82ac0831660b27c6ae2cc84969fa1f5d2c2e917084111583e317",
"0x16b7da0629c8a9af073c8acc709dfc6acafe71a0d99616a577bbdda35183545a",
"0xfa768c7a1129bcffa934130b678d916e7b7bfe658ffc15ce5b5961bc3792d7b1",
"0xa1e7138f1727ea9486b8e139c0d598ecd2876186a63ebda2eacccd8bb0447242",
"0x18336f74c2f003646a4efedd3fab6704c0a05f26575091786908dd89c8934011"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
