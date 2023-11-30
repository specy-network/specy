# Specy-Network

Specy Network is the automation engine of cosmos ecosystem

:warning: **NOTE:**  This branch document demonstrates how specy chain can automate inter-chain tasks with osmosis testnet.

## Overview 

Specy Network is a cutting-edge layer-1 blockchain, powered by the Cosmos stack, purpose-built for seamless automation, enabling gasless and automated transaction flows across multiple blockchains of the Cosmos ecosystem.

With Specy Network, users can seamlessly execute their Dapp in the future based on predefined conditions using multi-chain data. For example, they can automatically update a Merkle root of a reward list daily, implement automated trading strategies that leverage both on-chain and off-chain data, and execute token transactions at optimal prices through automated buying and selling.

To meet these high expectations, Specy Network utilizes a trusted specification based on the domain-specific asset language (DSAL). This empowers developers to easily define task conditions and required outcomes using both on-chain and off-chain data. Moreover, the network ensures reliable task execution verification through computational proofs based on TEE signatures or zero-knowledge proofs (ZKPs).

### Developer Documentation

specy developer docs can be found on the Specy-network documentation website.

https://specy-network.github.io/

## Setup

1. Clone this repository and build the application binary

```bash
cd specy
make install 
```

```bash
git clone https://github.com/specy-network/osmosis.git -b testnet-5-specy-tool
cd osmosis

make install 
```

2. Download and install an IBC relayer. ([go relayer](https://github.com/cosmos/relayer) ) 
```bash

# go relayer (make sure to use v2.0.0-rc4 or later!)
git clone https://github.com/cosmos/relayer.git
cd relayer 
make install
```

3. Bootstrap two chains, configure the relayer and create an IBC connection (on top of clients that are created as well)

:exclamation: **NOTE:** Modify all `specy-test-x` in the global network file to be the id of a client that has never been created in osmosis
```bash

# go relayer
make init-golang-rly-osmosis
```
First, obtain a token for the relay account on osmosis from the [osmosis test network faucet](https://faucet.testnet.osmosis.zone/).
```bash
osmosisd keys list --home data/osmo-test-5 --keyring-backend test
```
Check if enough tokens have been received for relay inter chain messages.
```bash
osmosisd q bank balances osmo17dtl0mjt3t77kpuhg2edqzjpszulwhgz5fk0yz --node http://222.106.187.14:53402
```

4. Start the relayer
```bash

#go relayer
make start-golang-rly-osmosis
```

:exclamation: **NOTE:** It is abstracted away in the script files, but in case you want to manually run `rly start` with interchain accounts, you will need to add this flag: `-p events` to it.

> This is the situation *before* `make init-*`. The blockchains are not live yet.
![pre-init](./images/pre-init-sn.jpg)

> This is the situation *after* `make init-*`. The chain binary's have been built and started, and an IBC connection between controller and host chains has been set up.
![post-init](./images/post-init-sn.jpg)

## Demo

:warning: **NOTE:** For the purposes of this demo the setup scripts have been provided with a set of hardcoded mnemonics that generate deterministic wallet addresses used below. Please set `specy-test-102` as the actual modified chain id above.

```bash
# Store the following account addresses within the current shell env
export WALLET_1=$(specyd keys show wallet1 -a --keyring-backend test --home ./data/specy-test-102) && echo $WALLET_1;
export WALLET_2=$(specyd keys show wallet2 -a --keyring-backend test --home ./data/specy-test-102) && echo $WALLET_2;
export WALLET_VAL=$(specyd keys show val1 -a --keyring-backend test --home ./data/specy-test-102) && echo $WALLET_VAL;
export WALLET_3=$(osmosisd keys show rly2 -a --keyring-backend test --home ./data/osmo-test-5) && echo $WALLET_3;
```

#### Create executor
As the validator of the `Specy` chain, the executor service must be running and the corresponding information registered on the chain, otherwise it will be evidenced and slashed.
```bash
specyd tx specy create-executor \
     iasreport enclavepk \
    --from $WALLET_VAL --chain-id specy-test-102 --home ./data/specy-test-102 --node tcp://localhost:16657 --keyring-backend test -y
```

```bash
specyd q specy list-executor --node tcp://localhost:16657
```

### Registering an Interchain Account via IBC

Register an Interchain Account using the `intertx register` cmd. 
Here the message signer is used as the account owner.

```bash
# Register an interchain account on behalf of WALLET_1 where chain test-2 is the interchain accounts host
specyd tx intertx register --from $WALLET_1 --connection-id connection-0 --chain-id specy-test-102 --home ./data/specy-test-102 --node tcp://localhost:16657 --keyring-backend test -y

# Query the address of the interchain account
specyd query intertx interchainaccounts connection-0 $WALLET_1 --home ./data/specy-test-102 --node tcp://localhost:16657

# Store the interchain account address by parsing the query result: cosmos1hd0f4u7zgptymmrn55h3hy20jv2u0ctdpq23cpe8m9pas8kzd87smtf8al
export ICA_ADDR=$(specyd query intertx interchainaccounts connection-0 $WALLET_1 --home ./data/specy-test-102 --node tcp://localhost:16657 -o json | jq -r '.interchain_account_address') && echo $ICA_ADDR
```

> This is the situation after registering the ICA. A channel has been created and an ICA has been registered on the host.
![post-register](./images/post-register-sn.jpg)

#### Funding the Interchain Account wallet

Allocate funds to the new Interchain Account wallet by using the `bank send` cmd.
Note this is executed on the host chain to provide the account with an initial balance to execute transactions.

```bash
# Query the interchain account balance on the host chain. It should be empty.
osmosisd q bank balances $ICA_ADDR  --node http://222.106.187.14:53402

# Send funds to the interchain account.
osmosisd tx bank send $WALLET_3 $ICA_ADDR 10osmo --chain-id osmo-test-5 --home ./data/osmo-test-5 --node http://222.106.187.14:53402 \
    --keyring-backend test  --gas-prices 0.025uosmo -y

# Query the balance once again and observe the changes
osmosisd q bank balances $ICA_ADDR --node http://222.106.187.14:53402
```

> This is the situation after funding the ICA.

#### Deposit token

When a task is executed, a handling fee will be deducted, so users need use `deposit-balance` cmd to deposit a certain number of tokens into the module in advance, otherwise the automated tasks created by the user in the future cannot be executed.
```bash
specyd tx specy deposit-balance \
    1000stake \
    --from $WALLET_1 --chain-id specy-test-102 --home ./data/specy-test-102 --node tcp://localhost:16657 --keyring-backend test -y
```

```bash
specyd q specy list-deposit --node tcp://localhost:16657
```

Of course, you can also use `withdraw-balance` cmd extract the deposit token.
```bash
specyd tx specy withdraw-balance \
    5000stake \
    --from $WALLET_1 --chain-id specy-test-102 --home ./data/specy-test-102 --node tcp://localhost:16657 --keyring-backend test -y
```


#### Create automation transaction task
We can create automated interchain tasks in the `Specy` chain using the `create-task` cmd. The following are some task examples:
- Automation task case 1:

    Create a transfer task for the host chain on the controller chain. When the task is executed, the interchain account on the host chain will transfer to the specified address.
    :warning: **NOTE:**  The last parameter '{"maxAmount": 10000}' is a check-data, which describes the custom data required for rulefile checking in JSON format.
    :warning: **NOTE:**  Replace the existing content with the actual output of ica-account.

    //TODO Add explanation for rulefile！
```bash
specyd tx specy create-task \
    test_task connection-0 \
    '{
    "@type":"/cosmos.bank.v1beta1.MsgSend",
    "from_address":"osmo17u0s3v5pdpqs5rtf52huwklnfkeytxwahddmggwx0jzqqzy5uamqqlnwlx",
    "to_address":"osmo17dtl0mjt3t77kpuhg2edqzjpszulwhgz5fk0yz",
    "amount": [
        {
            "denom": "uosmo",
            "amount": "10000000"
        }
    ]

    }' rulefile 0 0 100 '{"maxAmount":10000}' \
    --from $WALLET_1 --chain-id specy-test-102 --home ./data/specy-test-102 --node tcp://localhost:16657 --keyring-backend test -y

```
    

- Automation task case 2:
```bash 
specyd tx specy create-task \
    test_task2 connection-0 \
    '{
    "@type": "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
    "sender": "osmo1gt9vdhz5uwq29ftpprmjut5pzf4gp9yje5flnykm2taeztls287sm2nrrd",
    "routes": [
        {
            "pool_id": "12",
            "token_out_denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477"
        }
    ],
    "token_in": {
        "denom": "uosmo",
        "amount": "10000000"
    },
    "token_out_min_amount": "506530"
    }' rulefile 0 0 100 '{"maxAmount":10000}' \
    --from $WALLET_1 --chain-id specy-test-102 --home ./data/specy-test-102 --node tcp://localhost:16657 --keyring-backend test -y
```

- Automation task case 3:

Build automated tasks for smart contracts, fill in the desired contract address, functions, and parameters, and automatically execute them when the conditions are met.

```bash
specyd tx specy create-task \
    test_task3 connection-0 \
    '{
        "@type": "/cosmwasm.wasm.v1.MsgExecuteContract",
        "sender": "osmo1gt9vdhz5uwq29ftpprmjut5pzf4gp9yje5flnykm2taeztls287sm2nrrd",
        "contract": "osmo18d75fxaqpvlc925c44tmwsfuy24mkmgl5e6uvnsnklhm23elf4jqt0mrez",
        "msg": {
            "increment": {}
        },
        "funds": []
    }' rulefile 0 0 100 '{"maxAmount":10000}' \
    --from $WALLET_1 --chain-id specy-test-102 --home ./data/specy-test-102 --node tcp://localhost:16657 --keyring-backend test -y
```


![post-create-task](./images/post-create-task.jpg)

Query task details
Using the `list-task` cmd on the `Specy` chain to query tasks that have already been created.

```bash 
specyd q specy list-task --node tcp://localhost:16657
```


#### Simulate task execution

:warning: **NOTE:**  This is actually executed by the executor-service when the task rulefile setting is met.
The executor boot will perform data calculations based on the data definitions and constraints in the rulefile, and fill in the pre executed ica msg data according to the user's agreement.
Afterwards, use the `generate-packet-data` cmd of the target chain interchain-account host  sub-module to encode the ica msg to be executed, and use the encoded content as the packet data of the execute task msg for task execution.

Here, we manually simulate the generation of packet-data and send `execute-task` msg. 

:warning: **NOTE:**  Replace the existing content with the actual output of ica-account.
```bash
osmosisd tx interchain-accounts host generate-packet-data '{
    "@type": "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn",
    "sender": "osmo1gt9vdhz5uwq29ftpprmjut5pzf4gp9yje5flnykm2taeztls287sm2nrrd",
    "routes": [
        {
            "pool_id": "12",
            "token_out_denom": "ibc/A8C2D23A1E6F95DA4E48BA349667E322BD7A6C996D8A4AAE8BA72E190F3D1477"
        }
    ],
    "token_in": {
        "denom": "uosmo",
        "amount": "10000000"
    },
    "token_out_min_amount": "506530"
    }' --memo executing-task
```
This will roughly display content similar to the following.
```json
{"type":"TYPE_EXECUTE_TX","data":"CqIBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEoEBCkFjb3Ntb3MxYzZmMGV0Y2RrNXFjand5N2hoMHBqemdjYThocGpjZTVsMzhmNzZ1Z2Qwajl2cXZkeHEwc3lsMGRyeRItY29zbW9zMTBoOXN0YzV2Nm50Z2V5Z2Y1eGY5NDVuanFxNWgzMnI1M3VxdXZ3Gg0KBXN0YWtlEgQxMDAw","memo":"executing-task"}
```
Paste and replace the corresponding part of the output content.

```bash
specyd tx specy execute-task \
cosmos1m9l358xunhhwds0568za49mzhvuxx9uxre5tud test_task1 cproofstring '{"type":"TYPE_EXECUTE_TX","data":"CqIBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEoEBCkFjb3Ntb3MxYzZmMGV0Y2RrNXFjand5N2hoMHBqemdjYThocGpjZTVsMzhmNzZ1Z2Qwajl2cXZkeHEwc3lsMGRyeRItY29zbW9zMTBoOXN0YzV2Nm50Z2V5Z2Y1eGY5NDVuanFxNWgzMnI1M3VxdXZ3Gg0KBXN0YWtlEgQxMDAw","memo":"executing-task"}' \
--from $WALLET_VAL --chain-id specy-test-102 --home ./data/specy-test-102 --node tcp://localhost:16657 --keyring-backend test -y

```

![execute-task](./images/post-execute-task.jpg)

#### Query the execution results of automated tasks on the host chain

You can see that in addition to the original token, a swap token（IBC/XXXXXX） has also been added.
- account balance
```bash
osmosisd q bank balances $ICA_ADDR --node http://222.106.187.14:53402
```
