var Tx = require('ethereumjs-tx').Transaction

const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/d1f1e6b09ce64f2989bff65d6562a99e')


const account1 = '0xD271aF68605E84Ef193a6Fa14c6664bA752DAb14' // Your account address 1
const account2 = '0x7D89801dE54827b48F00D795A3b6695c1bb589dB' // Your account address 2
const account3 = '0x423eb8f1E9a7f87a04F9b9Fc86b351B02d39e531'

const privateKey1 = Buffer.from('29da4c6de1cb2973db62159aedf6596c9cb93afebbcf2c18922ede1f46133ada', 'hex')
const privateKey2 = Buffer.from('d75ef594cbe78d7e72a28854ba086df603559a19c6882acaadec4162fedc968d', 'hex')


const sendTransaction = async(raw) => {
  return await web3.eth.sendSignedTransaction(raw)
}

const getTransactionCount = async(account) => {
  return await web3.eth.getTransactionCount(account)
}

const transferFunds = async(account1, account3, amount) => {

  let txCount = await getTransactionCount(account1)

  console.log("txCount returned: " + txCount)

  const txObject = {
    nonce:    web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(21000), 
    gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),
    to: account3,
    value:    web3.utils.toHex(web3.utils.toWei(amount, 'ether')),
  }

  const tx = new Tx(txObject, {chain:'ropsten', hardfork: 'petersburg'})

  tx.sign(privateKey1)

  const serializedTx = tx.serialize()
  const raw = '0x' + serializedTx.toString('hex')

  console.log("about to send transaction")
  let minedTransaction = await sendTransaction(raw)
  console.log(minedTransaction)
  console.log("txHash: " + minedTransaction.transactionHash)
}

const transfer = async() => {
  await transferFunds(account1, account3, "0.001")
}

transfer()
