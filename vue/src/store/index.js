

import { createStore, createLogger } from 'vuex'
import common from './common/common'
import task from './task/task'
const debug = process.env.NODE_ENV !== 'production'
export default createStore({
    modules: {
        common,
        task
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})