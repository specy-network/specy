import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateTask } from "./types/specy/specy/tx";
import { MsgCreateExecutor } from "./types/specy/specy/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/specy.specy.MsgCreateTask", MsgCreateTask],
    ["/specy.specy.MsgCreateExecutor", MsgCreateExecutor],
    
];

export { msgTypes }