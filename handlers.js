const express = require('express')
let contract = require('./Blockchain-ERC20_2.js')
const app = express()

app.use(express.json())

app.get('/', async (req,res) => {
  res.send(await contract.getTotalSupply())
})

app.get('/supply', async (req,res) => {
  res.send(await contract.getTotalSupply())
  console.log(res.status)
})

app.get('/balance', async (req,res) => {
    res.send(await contract.getBalanceOf(req.query.address))
    console.log(res.status)
})

app.post('/transfer', async (req,res) =>{
    var transfer_from = req.body.account_from;
    var transfer_to = req.body.account_to;
    var amount = req.body.amount;
    res.send(await contract.transferFunds(transfer_from, transfer_to, amount))
    console.log(res.status)
}
)

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
