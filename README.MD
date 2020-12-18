## ERC20 Smart Contract - Excecution flow

### Steps to Run the Code Locally

1. Git pull the source code
2. Open terminal and run 'npm install', it will install all the dependencies
3. Make sure nodejs has been installed
4. To start run the application run 'npm start' or 'node handlers.js', package.json has the script code were I have mentioned the npm start.
5. The post 8080 has been set and we can start make the GET or POST requests to access the resouces
6. accounts.txt has the list of addresses to send the tokens, 5% of the balance total supply tokens will be distributed to list of addresses mentioned
7. run ths url: http://localhost:8080/transferFromList as a POST request, transaction will be begin (Secret Authentication key has to be added in the header)
8. Header key: x-api-key, value: qD62BOed63YQdNK7p1pt54h96bq1c638yc5I81eg
8. Once the transactions has been finished then all transaction hash will be sent as a response

### Steps to Run the Code on Deployed URL

1. Deployed REST API end point url: http://block-env.eba-3xtjemn5.us-east-1.elasticbeanstalk.com/
2. Use the 'transferFromList' at the end of the url, http://block-env.eba-3xtjemn5.us-east-1.elasticbeanstalk.com/transferFromList , (Secret Authentication key has to be added in the header)
3. Header key: x-api-key, value: qD62BOed63YQdNK7p1pt54h96bq1c638yc5I81eg
4. Once the transactions has been finished then all transaction hash will be sent as a response

### Project Details

1. This project is to create a Ethereum smart contract to do the basic token distribution operation on ropsten test network
2. I have added the solidity code in the repository for versioning. This contract includes, get balance, get total supply tokens, transfer, percentage calculation and distribution.
3. I have deployed this contract on Etherscan ropsten test network. Contract address: 0x7edA20c51e0831B4C278e63f16c049859192AfbF
4. The name of the contract is my student id and name "x20154810_Jayashathiskumar", for easy to identifying the student name and id.
5. Once the transaction has been started then the contract will get the balace tokens, get 5% of the balance tokens, divide the 5% of the tokens by number of accounts in the accounts.txt file, then distribute the tokens.
6. As a result transaction hash ids will be a response separated by commas.

### Code Deployment

1. I have used AWS cloud for deploying the js files. Continuous Integration and Continuous Deployment has been added for this project.
2. I have used Elastic beanstalk for deploying the js files, url: http://block-env.eba-3xtjemn5.us-east-1.elasticbeanstalk.com/
3. This url exposed as a REST API with Secret Authentication key and value
4. Authentication key and value has to be added in the header while requesting the smart contract.
5. The complete CI/CD lifecyle has been added, so each time code changes on the repository will trigger the AWS CodePipelie and the deployment will happen within a minutes.

DockerHub command for the docker container: docker pull jjayakumardev/20154810:latest

My Private Docker Repo: jjayakumardev/20154810

Note: Docker container also has the autobuild trigger configured.

I have provided the repository access to eoinco on GitHub.