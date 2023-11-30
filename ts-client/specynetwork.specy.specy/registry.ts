import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgEditTask } from "./types/specy/specy/tx";
import { MsgExecuteTask } from "./types/specy/specy/tx";
import { MsgWithdrawBalance } from "./types/specy/specy/tx";
import { MsgCancelExecutor } from "./types/specy/specy/tx";
import { MsgEditExecutor } from "./types/specy/specy/tx";
import { MsgCancelTask } from "./types/specy/specy/tx";
import { MsgDepositBalance } from "./types/specy/specy/tx";
import { MsgCreateExecutor } from "./types/specy/specy/tx";
import { MsgCreateTask } from "./types/specy/specy/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/specynetwork.specy.specy.MsgEditTask", MsgEditTask],
    ["/specynetwork.specy.specy.MsgExecuteTask", MsgExecuteTask],
    ["/specynetwork.specy.specy.MsgWithdrawBalance", MsgWithdrawBalance],
    ["/specynetwork.specy.specy.MsgCancelExecutor", MsgCancelExecutor],
    ["/specynetwork.specy.specy.MsgEditExecutor", MsgEditExecutor],
    ["/specynetwork.specy.specy.MsgCancelTask", MsgCancelTask],
    ["/specynetwork.specy.specy.MsgDepositBalance", MsgDepositBalance],
    ["/specynetwork.specy.specy.MsgCreateExecutor", MsgCreateExecutor],
    ["/specynetwork.specy.specy.MsgCreateTask", MsgCreateTask],
    
];

export { msgTypes }