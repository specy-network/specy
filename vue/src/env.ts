const apiURL = import.meta.env.VITE_API_COSMOS ?? "http://10.100.117.55:1317";
const rpcURL = import.meta.env.VITE_WS_TENDERMINT ?? "http://10.100.117.55:26657";
const prefix = import.meta.env.VITE_ADDRESS_PREFIX ?? "cosmos";

export const env = {
  apiURL,
  rpcURL,
  prefix,
};
