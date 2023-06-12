import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSetRewardList } from "./types/specy/rewards/tx";
import { MsgClaim } from "./types/specy/rewards/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/specy.rewards.MsgSetRewardList", MsgSetRewardList],
    ["/specy.rewards.MsgClaim", MsgClaim],
    
];

export { msgTypes }