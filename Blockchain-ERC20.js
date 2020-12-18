const Web3 = require('web3')
var Tx = require('ethereumjs-tx').Transaction

const web3 = new Web3('https://ropsten.infura.io/v3/d1f1e6b09ce64f2989bff65d6562a99e')

// Primary Account Address
const account1 = '0xD271aF68605E84Ef193a6Fa14c6664bA752DAb14'

// Private key
const privateKey1 = Buffer.from('29da4c6de1cb2973db62159aedf6596c9cb93afebbcf2c18922ede1f46133ada', 'hex')

// Read the deployed contract - get the addresss from Etherscan
// backup contract - const contractAddress = '0xF416c233dFDb0666A441C323C04EA541429A2E31'
const contractAddress = '0x9615F02580Fb3558f8C51195Ca998FB1d2E3c036'
// backup ABI - const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfDivition","type":"uint256"},{"internalType":"uint256","name":"percentageOfBal","type":"uint256"}],"name":"amountDistribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"percentage","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"}],"name":"percentageOfBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfDivition","type":"uint256"},{"internalType":"uint256","name":"percentageOfBal","type":"uint256"}],"name":"amountDistribution","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"percentage","type":"uint256"},{"internalType":"uint256","name":"balance","type":"uint256"}],"name":"percentageOfBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]

const contract = new web3.eth.Contract(contractABI, contractAddress)

// get Transaction Count
const getTransactionCount = async(account) => {
  return await web3.eth.getTransactionCount(account)
}

// send Transaction
const sendTransaction = async(raw) => {
  return await web3.eth.sendSignedTransaction(raw)
}

// Transfer funds
const transferFunds = async(account1, toAddress, amount) => {

  let txCount = await getTransactionCount(account1)

  console.log("txCount returned: " + txCount)

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(60000), // uses about 36,000 gas so add some buffer
    gasPrice: web3.utils.toHex(web3.utils.toWei('300', 'gwei')),
    to: contractAddress,
    data: contract.methods.transfer(toAddress, amount).encodeABI()
  }

  const tx = new Tx(txObject, {chain:'ropsten', hardfork: 'petersburg'})
  tx.sign(privateKey1)
  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  console.log("about to send transaction")
  let minedTransaction = await sendTransaction(raw)
  console.log("transaction hash returned: " + minedTransaction.transactionHash)
  return minedTransaction.transactionHash;
}

// getbalance
const getBalanceOf = async(account) => {
  let balanceOf = await contract.methods.balanceOf(account).call()
  return balanceOf
}

// get given percntage of the balance
const percentageOfBalance = async(percentage, balance) => {
  let percentageBal = await contract.methods.percentageOfBalance(percentage, balance).call()
  return percentageBal
}

// async method - get required distrubusion amount for transfer
const amountDistribution = async(numOfDiv, perBal) => {
  let amtToDist = await contract.methods.amountDistribution(numOfDiv, perBal).call()
  return amtToDist
}

// get total supply
const getTotalSupply = async() => {
  let totSupply = await contract.methods.totalSupply().call()
  return totSupply
}

// get account addresses from text file
const getEntriesInFile = () => {
  const fs = require('fs')
  try {
    const data = fs.readFileSync('./accounts.txt', 'utf8')
    dataList = data.split("\n")
    return dataList
  } catch (err) {
    console.error(err)
  }
}

// Transfer tokens from the list of addresses given
const trasferFromList = async() => {
  let addressList = await getEntriesInFile()
  let numOfAddress = addressList.length
  let balance = await getBalanceOf(account1)
  let totalSupply = await getTotalSupply()
  let percentageOfBal = await percentageOfBalance(5, balance)
  let amtToDist = await amountDistribution(numOfAddress, percentageOfBal)
  try {
    let transactionHash = "";
    for(const toAddress of addressList){
      //console.log(toAddress+" "+amtToDist)
      let hash = await transferFunds(account1, toAddress, amtToDist)+", "
      //let hash = "test"
      transactionHash = transactionHash+hash;
    }
    console.log(transactionHash)
    return "Transaction Hash Returned :"+transactionHash;
  } catch (error) {
      console.log("transaction error"+error.message);
      throw error;
  }
}

module.exports = {trasferFromList, transferFunds, getTotalSupply, getBalanceOf}

