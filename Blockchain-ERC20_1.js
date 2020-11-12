const Web3 = require('web3')
const rpcURL = "https://ropsten.infura.io/v3/d1f1e6b09ce64f2989bff65d6562a99e"
const web3 = new Web3(rpcURL)
const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]

const address = "0xe8a344bed7e3d765a3f01eaf1c26db2c2075663b"
const owner = "0xD271aF68605E84Ef193a6Fa14c6664bA752DAb14"
const contract = new web3.eth.Contract(abi, address)
const getTotalSupply = async() => {
let totSupply = await contract.methods.totalSupply().call()
return "totsup: " + totSupply
}
const getName = async() => {
let name = await contract.methods.name().call()
return "name: " + name
}
const getSymbol = async() => {
let symbol = await contract.methods.symbol().call()
return "symbol: " + symbol
}
const getBalanceOf = async(owner) => {
let balanceOf = await contract.methods.balanceOf(owner).call()
return "balanceOf: " + balanceOf
}
const getDecimals = async() => {
let decimals = await contract.methods.decimals().call()
return "decimals: " + decimals
}
const getEntriesInFile = () => {
	const fs = require('fs')
	fs.readFile('/Users/jayashathiskumar/Documents/NCI/Projects/Blockchain/test.txt', 'utf8' , (err, data) => {
		if (err) {
			console.error(err)
			return
		}
	  let dataList = data.split("\n")
	  console.log(dataList.length)
})
}
const returnValues = async() => {
console.log(await getTotalSupply())
//console.log(await getName())
//console.log(await getDecimals())
//console.log(await getSymbol())
console.log(await getBalanceOf(owner))
//getEntriesInFile()
}

const totalSupply = async() => {
    let retval = await getTotalSupply()
    console.log('retval is: ' + retval)
    return retval
}
//module.exports = { returnValues, totalSupply }
    returnValues()
