const Web3 = require('web3')
var Tx = require('ethereumjs-tx').Transaction

const web3 = new Web3('https://ropsten.infura.io/v3/d1f1e6b09ce64f2989bff65d6562a99e')

const account1 = '0xD271aF68605E84Ef193a6Fa14c6664bA752DAb14' // Your account address 1
const account2 = '0x7D89801dE54827b48F00D795A3b6695c1bb589dB' // Your account address 2
//const ProfAccount = '0x9b14eee99808bab2a4c6492d37b4d771f75b7631' // Professor's acocunt

const privateKey1 = Buffer.from('29da4c6de1cb2973db62159aedf6596c9cb93afebbcf2c18922ede1f46133ada', 'hex')
const privateKey2 = Buffer.from('d75ef594cbe78d7e72a28854ba086df603559a19c6882acaadec4162fedc968d', 'hex')


// Read the deployed contract - get the addresss from Etherscan
const contractAddress = '0xe8a344bed7e3d765a3f01eaf1c26db2c2075663b'
const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]

const contract = new web3.eth.Contract(contractABI, contractAddress)


const getTransactionCount = async(account) => {
  return await web3.eth.getTransactionCount(account)
}

const sendTransaction = async(raw) => {
  return await web3.eth.sendSignedTransaction(raw)
}
const transferFunds = async(account1, account2, amount) => {

  let txCount = await getTransactionCount(account1)

  console.log("txCount returned: " + txCount)

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(50000), // uses about 36,000 gas so add some buffer
    gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),
    to: contractAddress,
    data: contract.methods.transferFrom(account1, account2, amount).encodeABI()
  }

  const tx = new Tx(txObject, {chain:'ropsten', hardfork: 'petersburg'})
  tx.sign(privateKey1)
  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  console.log("about to send transaction")
    let minedTransaction = await sendTransaction(raw)
    console.log("transaction hash returned: " + minedTransaction.transactionHash)
}

// async methods
const getBalanceOf = async(account) => {
  let balanceOf = await contract.methods.balanceOf(account).call()
  return balanceOf
}

const getEntriesInFile = () => {
  const fs = require('fs')
  try {
    const data = fs.readFileSync('/Users/jayashathiskumar/Documents/NCI/Projects/Blockchain/test.txt', 'utf8')
    dataList = data.split("\n")
    return dataList
  } catch (err) {
    console.error(err)
  }
}

const go = async() => {
  let balance = await getBalanceOf(account1)

  try {
      await transferFunds(account1, account2, 1)
  } catch (error) {
      console.log("transaction error"+error.message);
      throw error;
  }
}

go()
