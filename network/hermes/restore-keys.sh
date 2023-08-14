#!/bin/bash
set -e

# Load shell variables
. ./network/hermes/variables.sh

### Sleep is needed otherwise the relayer crashes when trying to init
sleep 1

### Delete keys
$HERMES_BINARY --config ./network/hermes/config.toml keys delete --chain test-1 --all
$HERMES_BINARY --config ./network/hermes/config.toml keys delete --chain test-2 --all

### Restore Keys
$HERMES_BINARY --config ./network/hermes/config.toml keys add --chain test-1 --mnemonic-file ./network/hermes/mnemonic-test1.txt
sleep 5

$HERMES_BINARY --config ./network/hermes/config.toml keys add --chain test-2 --mnemonic-file ./network/hermes/mnemonic-test2.txt
sleep 5
