import request from "../utils/request"
export function tx(hash) {
    return request({
        url: `/cosmos/tx/v1beta1/txs/${hash}`,
        method: 'get'
    })
}