require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad grid nation foster spot'; 
let testAccounts = [
"0x6040e9f611d2a724219fec18c405c4c81f2e3c4bee5de3067a1e7f4a19e418e4",
"0x63a03acc91a8992c757429f690856355febbedee8195bfba62fb47f00e121d86",
"0xc6b986a9f48f2a89d51d08ab92e21feacc8dd20fc044218f4b75c9eb9dc2c178",
"0x574266a940b5f8eb0f95a21a05a0d4871e53f2575ad33084e8990f76c441767e",
"0x3cb6cb7ad713ef3e0d81fe982103b413050f518d65b4461890157b24aa4754c6",
"0x72445d8766c922e009c6bf32853a16aaf4fcf4cd259d13db7e1093327b5a5f64",
"0xdaff6f3fc7bf76ae41d65c06b275c859b62b159dd9d36a6b6fe238ef0ec4ad86",
"0xf820e54f567b5e7b51d7b9b44f3a6e97756c528246fb4ae2df06d6b67e85a9f9",
"0x8f03b67f366aa0d5d2ab51be04eecfa77afd91df653bb46d17ef939747bbc1ac",
"0x923170a4a8c5ede8c1df89480fb836192ad401a0c0cc485016d399dd0cb3d2d4"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

