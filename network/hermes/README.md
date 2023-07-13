# Hermes Relayer

[Hermes](https://hermes.informal.systems/) is a Rust implementation of a relayer for the [Inter-Blockchain Communication (IBC)](https://ibcprotocol.org/) protocol.

> The Inter-Blockchain Communication protocol is an end-to-end, connection-oriented, stateful protocol for reliable, ordered, and authenticated communication between modules on separate distributed ledgers.

## Getting started

- Install [Rust](https://www.rust-lang.org/tools/install)
- Install [Hermes](https://hermes.informal.systems/installation.html)

The following directory contains a basic executable script which handles creation of clients, connections and channels in order to facilitate packet relaying between distributed ledgers using the IBC protocol.
This serves as a basis for demonstration of interchain accounts e2e functionality validation.

## Usage

- Before attempting to create clients, connections and channels, the private keys for existing chains must be restored. Please note - currently the relayer does NOT support a keyring store to securely store the private key file. The key file will be stored on the local file system in the user `$HOME` folder under `$HOME/.hermes`
```
hermes --config config.toml keys add --chain $CHAIN_ID --mnemonic-file <MNEMONIC_FILE>
hermes --config config.toml keys add --chain $CHAIN_ID --mnemonic-file <MNEMONIC_FILE>
```

- Execute the script
```
./hermes.sh
```

- Useful commands
```
# Query client state
hermes query client state --chain $CHAIN_ID --client 07-tendermint-0

# Update client state by sending an update-client transaction
hermes update client --host-chain $CHAIN_ID --client 07-tendermint-0

# Query a connection end
hermes query connection end --chain $CHAIN_ID --connection connection-0

# Query channel ends
hermes query channel end --chain $CHAIN_ID --port transfer --channel channel-0
hermes query channel end --chain $CHAIN_ID --port ibcaccount --channel channel-1
```

Please refer to the [Hermes documentation](https://hermes.informal.systems/) for more information regarding various commands.
