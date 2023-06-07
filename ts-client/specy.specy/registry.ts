import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateExecutor } from "./types/specy/specy/tx";
import { MsgExecuteTask } from "./types/specy/specy/tx";
import { MsgCreateTask } from "./types/specy/specy/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/specy.specy.MsgCreateExecutor", MsgCreateExecutor],
    ["/specy.specy.MsgExecuteTask", MsgExecuteTask],
    ["/specy.specy.MsgCreateTask", MsgCreateTask],
    
];

export { msgTypes }