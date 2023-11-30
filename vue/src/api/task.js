import request from "../utils/request"

export function tasks(address) {
    return request({
        url: `/specy-network/specy/specy/task_all_by_owner/${address}`,
        method: 'get'
    })
}

export function records(address, name) {
    return request({
        url: `/specy-network/specy/specy/execute_record_all_by_owner_and_name/${address}/${name}`,
        method: 'get'
    })
}