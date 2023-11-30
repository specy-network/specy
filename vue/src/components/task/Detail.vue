<template>
  <div class="container project-card p-2 mt-6">
    <div class="detail">
      <h2 class="mt-3">Detail</h2>
      <div class="task-container border-1 row">
        <div class="col-md-3 p-5 m-3 bg-light">
          <h4 class="mb-4">Registration</h4>
          <p>Owner address</p>
          <p class="p-color">{{ shortAddress }}</p>
          <hr />
          <p>Name</p>
          <p class="p-color">{{ task.name }}</p>
          <hr />
          <p>Hash</p>
          <p class="p-color">{{ shortHash }}</p>
          <hr />
          <p>Connection ID</p>
          <p class="p-color">{{ task.connectionId }}</p>
        </div>
        <div class="col-md-5 p-5 m-3 bg-light">
          <h4 class="mb-4">Meta Data</h4>
          <div class="overflow-auto mh-400">
            <p>Msg content</p>
            <p class="p-color">{{ task.msg }}</p>
            <hr />
            <p>Rule file content</p>
            <p class="p-color">{{ task.ruleFiles }}</p>
            <hr />
            <p>Check data</p>
            <p class="p-color">{{ task.checkData }}</p>
          </div>
        </div>
        <div class="col-md-3 p-5 m-3 bg-light">
          <h4 class="mb-4">Status</h4>
          <p>Task type</p>
          <p class="p-color">{{ taskType }}</p>
          <div class="schedule" v-if="task.taskType == 0">
            <p>Schedule type</p>
            <span class="p-color" v-if="task.scheduleType.intervalType == 0">
              Time
            </span>
            <span v-else class="p-color">Block</span>
            <span class="p-color p-5">{{ task.scheduleType.number }}</span>
          </div>

          <hr />
          <p>Last execute time</p>
          <p class="p-color" v-if="loaded && recordsTable.length >= 1">
            {{ recordsTable[recordsTable.length - 1].timestamp }}
          </p>
          <p class="p-color" v-else>Unexecuted</p>
          <!-- <hr /> -->
          <!-- <p>Last execute height</p>
          <p class="p-color">{{ task.updateBlockHeight }}</p> -->
        </div>
      </div>
      <hr />
    </div>

    <div class="history">
      <h2 class="mt-5">History</h2>

      <div class="table-responsive">
        <el-table
          :data="currentPageData"
          :border="parentBorder"
          style="width: 100%"
          v-if="loaded"
        >
          <el-table-column type="expand">
            <template #default="props">
              <div m="4" class="ml-10 p-3">
                <p m="t-0 b-2">
                  Input data : {{ props.row.cproof.inputdata.inputdatas }}
                </p>
                <p m="t-0 b-2">
                  Output data : {{ props.row.cproof.outputdata }}
                </p>
                <p m="t-0 b-2">Rules : {{ props.row.cproof.rules }}</p>
                <p m="t-0 b-2">
                  Rulefile hash : {{ props.row.cproof.rulefilehash }}
                </p>
                <p m="t-0 b-2">Signature: {{ props.row.cproof.signature }}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="Date" prop="timestamp" width="160" />
          <el-table-column label="TxHash" prop="txHash" width="540" />
          <el-table-column label="Executor" prop="executor" width="400" />
          <el-table-column label="Amount" prop="amount" />
        </el-table>
      </div>
      <nav
        aria-label="Page navigation"
        class="d-flex justify-content-between align-items-center m-3"
        v-if="loaded"
      >
        <div>
          <button
            class="btn btn-outline-dark"
            :disabled="currentPage <= 1"
            @click="goToPage(currentPage - 1)"
          >
            Previous
          </button>
        </div>
        <p class="m-0">{{ currentPage }} / {{ totalPages }}</p>
        <div>
          <button
            class="btn btn-outline-dark"
            :disabled="currentPage === totalPages"
            @click="goToPage(currentPage + 1)"
          >
            Next
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>
  
<script setup>
import { useStore } from "vuex";
import { onBeforeMount, onMounted, onBeforeUnmount, computed, ref } from "vue";
import { taskRecords } from "../../def-composables/taskHistory";
import { format } from "date-fns";
import { records } from "../../api/task";
import { tx } from "../../api/tx";
import { useRouter } from "vue-router";
//util
let store = useStore();
let router = useRouter();
let expandedRows = ref(-1);
//state
const parentBorder = ref(false);
const childBorder = ref(false);
let currentPage = ref(1);
let loaded = ref(false);
let task = ref();
let recordsTable = ref();

let timer;

//function
let toggleRow = (index) => {
  expandedRows.value = index;
};
let shortAddress = computed(() => {
  return (
    task.value.owner.substring(0, 20) +
    "..." +
    task.value.owner.substring(41, 46)
  );
});

let shortHash = computed(() => {
  return (
    task.value.hash.substring(0, 20) + "..." + task.value.hash.substring(60, 64)
  );
});
let shortTxHash = (txHash) => {
  return txHash.substring(0, 20) + "..." + txHash.substring(60, 64);
};
let taskType = computed(() => {
  if (task.value.taskType == 0) {
    return "Period";
  } else {
    return "Custom";
  }
});
const formatDate = (value) => format(value, "yyyy-MM-dd hh:mm");

let totalPages = computed(() => {
  return Math.ceil(recordsTable.value.length / 10);
});
let currentPageData = computed(() => {
  if (recordsTable.value.length != 0) {
    const startIndex = (currentPage.value - 1) * 10;
    const endIndex = startIndex + 10;
    return recordsTable.value.slice(startIndex, endIndex);
  }
});

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};
const getRecords = () => {
  let trash = new Set();
  let filterKey = new Set();
  let filterData = [];
  let isProcessing = false;

  const processRecords = async () => {
    if (isProcessing) return;
    isProcessing = true;

    try {
      const response = await records(task.value.owner, task.value.name);
      const resRecords = response.records;

      resRecords.sort((a, b) => a.position - b.position);

      for (const element of resRecords) {
        const txHash = element.txHash;
        if (!trash.has(txHash)) {
          const res = await tx(element.txHash);
          const key = res.tx.body.messages[0].packet_data.data;
          if (!filterKey.has(key)) {
            filterKey.add(key);
            element["cproof"] = JSON.parse(res.tx.body.messages[0].cproof);
            element["timestamp"] = format(
              element.timestamp / 1000000,
              "yyyy-MM-dd hh:mm"
            );

            filterData.push(element);
            recordsTable.value = filterData;
          } else {
            trash.add(txHash);
          }
        }
      }
      if (filterData.length == 0) {
        recordsTable.value = [];
        currentPage.value = 0;
      }

      loaded.value = true;
    } catch (error) {
      console.log(error);
    } finally {
      isProcessing = false;
    }
  };

  timer = setInterval(processRecords, 2000);

  // Optionally, you can return a function to clear the interval if needed.
  // Example: return () => clearInterval(timer);
};

//hook
onBeforeMount(() => {
  if (store.state.task.task != null) {
    task.value = store.state.task.task;
    getRecords();
  }
});
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>
  
<style scoped lang="scss">
.mh-500 {
  height: 500px;
}
.mh-400 {
  height: 400px;
}
.overflow-auto::-webkit-scrollbar {
  width: 0.1rem; /* 将滚动条的宽度设置为非常小的值 */
  background-color: transparent; /* 设置背景颜色为透明 */
}
$light-bg: #f8f9fa;
.bg-light {
  background-color: $light-bg;
}
.p-color {
  color: rgb(45, 114, 179);
}
</style>
  