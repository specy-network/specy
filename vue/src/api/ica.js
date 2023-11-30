import request from "../utils/request"

export function icaAddress(address, connectionId) {
    return request({
        url: `/inter-tx/interchain_account/owner/${address}/connection/${connectionId}`,
        method: 'get'
    })
}