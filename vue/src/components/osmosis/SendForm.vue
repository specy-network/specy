<template>
  <div>
    <div class="row mt-1 rounded-lg shadow-sm p-2 mb-5">
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">Task Name</label>
        <div class="col-md-9">
          <input type="text" class="form-control" v-model="taskName" />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-md-3 col-form-label">Sender</label>
        <div class="col-md-9">
          <input
            type="text"
            readonly
            class="form-control"
            v-model="icaAddress"
          />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-3 col-form-label">Receiver</label>
        <div class="col-sm-9">
          <input v-model="receiverAddress" type="text" class="form-control" />
        </div>
      </div>
      <div class="mb-3 row">
        <label class="col-sm-3 col-form-label">Amount</label>
        <div class="col-sm-2">
          <input v-model="amount" type="text" class="form-control" />
        </div>
        <label class="col-sm-1 col-form-label mr-1">Denom</label>
        <div class="col-sm-5">
          <input v-model="denom" type="text" class="form-control" />
        </div>
      </div>
      <div class="mb-3 row align-items-center">
        <label class="col-sm-3 col-form-label">RuleFile</label>
        <div class="col-sm-9">
          <textarea
            v-model="rulefile"
            type="text"
            class="form-control"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div class="mb-3 row align-items-center">
        <label class="col-md-3 col-form-label">Check Data</label>
        <div class="col-sm-9">
          <textarea
            v-model="checkData"
            type="text"
            class="form-control"
            rows="3"
          ></textarea>
        </div>
      </div>
      <div class="text-center mb-2">
        <button
          class="main-btn pl-5 pr-5 pt-1 pb-1"
          @click="submit"
          v-if="icaAddress.length != 0"
        >
          submit
        </button>
      </div>
    </div>
  </div>
</template>

  
  <script setup lang="ts">
import { ref, computed } from "vue";
import type { Amount } from "@/utils/interfaces";
import { useClient } from "@/composables/useClient";
import { ElNotification } from "element-plus";
import { useAddress } from "../../def-composables/useAddress";
import { useStore } from "vuex";
//page params
let taskName = ref("");
let receiverAddress = ref("");
let amount = ref(0);
let denom = ref("uosmo");
let rulefile = ref("");
let checkData = ref("");
//props
const props = defineProps({
  connectionId: {
    type: String,
    require: true,
  },
});
let store = useStore();
let icaAddress = computed(() => {
  return store.state.common.icaAddress;
});
const client = useClient();
const createTask = client.SpecynetworkSpecySpecy.tx.sendMsgCreateTask;
//function
const notification = (status: Boolean) => {
  if (status) {
    ElNotification({
      title: "Success",
      message: "TX successed!",
      type: "success",
    });
  } else {
    ElNotification({
      title: "Error",
      message: "TX failed!",
      type: "error",
    });
  }
};
const submit = async (): Promise<void> => {
  let { address } = useAddress();
  let send;
  const fee: Array<Amount> = [
    {
      denom: "stake",
      amount: "0",
    },
  ];

  let bankSend = {
    "@type": "/cosmos.bank.v1beta1.MsgSend",
    from_address: icaAddress.value,
    to_address: receiverAddress.value,
    amount: { denom: denom.value, amount: amount.value },
  };
  console.log(bankSend);

  let msg = JSON.stringify(bankSend);

  let payload: any = {
    creator: address.value,
    name: taskName.value,
    connectionId: props.connectionId,
    msg: msg,
    ruleFiles: rulefile.value,
    taskType: 0,
    intervalType: 1,
    number: 1,
    checkData: checkData.value,
  };

  try {
    send = () =>
      createTask({
        value: payload,
        fee: { amount: fee as Readonly<Amount[]>, gas: "200000" },
        memo: "",
      });

    const txResult = await send();
    if (txResult.code) {
      throw new Error();
    }
    notification(true);
  } catch (e) {
    notification(false);
    console.error(e);
  }
};
</script>
<style lang="scss" scoped>
.col-form-label {
  color: #757575;
  font-weight: 500;
}
.main-btn {
  background-color: rgb(255, 255, 255);
  color: rgb(45, 114, 179);
  border: 1px solid rgb(45, 114, 179);
  border-radius: 5px;
  &:hover {
    background-color: rgb(20, 101, 176);
    color: #fff;
  }
}
</style>