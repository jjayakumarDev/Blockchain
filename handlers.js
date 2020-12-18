const express = require('express')
let contract = require('./Blockchain-ERC20.js')
const app = express()
//change the private key as a dynamic field
app.use(express.json())

app.get('/', async (req,res) => {
  if(req.header('x-api-key') === 'qD62BOed63YQdNK7p1pt54h96bq1c638yc5I81eg'){
    res.send(await contract.getTotalSupply())
  }
})

app.get('/supply', async (req,res) => {
  if(req.header('x-api-key') === 'qD62BOed63YQdNK7p1pt54h96bq1c638yc5I81eg'){
    res.send(await contract.getTotalSupply())
  }
})

app.get('/balance', async (req,res) => {
  if(req.header('x-api-key') === 'qD62BOed63YQdNK7p1pt54h96bq1c638yc5I81eg'){
    res.send(await contract.getBalanceOf(req.query.address))
  }
})

app.post('/transferFromList', async (req,res) => {
  if(req.header('x-api-key') === 'qD62BOed63YQdNK7p1pt54h96bq1c638yc5I81eg'){
    res.send(await contract.trasferFromList())
  }
})

app.post('/transfer', async (req,res) =>{
  if(req.header('x-api-key') === 'qD62BOed63YQdNK7p1pt54h96bq1c638yc5I81eg'){
    var transfer_from = req.body.account_from;
    var transfer_to = req.body.account_to;
    var amount = req.body.amount;
    res.send(await contract.transferFunds(transfer_from, transfer_to, amount))
  }
}
)

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
