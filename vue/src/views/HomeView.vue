<template>
  <div>
    <Introduction
      :projectName="projectName"
      :projectDescription="projectDescription"
    />
    <ShowTasks title="My tasks" :tableData="tableData" :itemsPerPage="5" />
  </div>
</template>
  
<script>
import Introduction from "../components/home/Introduction.vue";
import ShowTasks from "../components/home/ShowTasks.vue";
import { useAddress } from "../def-composables/useAddress";
import { userTasks } from "../def-composables/userTasks";

export default {
  components: {
    Introduction,
    ShowTasks,
  },
  data() {
    return {
      address: "",
      projectName: "Specy  Automation",
      projectDescription:
        "Automate your Cosmos ecosystem TX with the Specy Network.",
      tableData: [],
    };
  },
  methods: {
    getUserTasks() {
      //暂且获取所有的task
      let { tasks } = userTasks(100);
      const timer = setInterval(() => {
        if (tasks.value.isLoading == false) {
          this.tableData = tasks.value.tasks;
          clearInterval(timer); // 停止定时器
        } else {
          console.log("wait");
        }
      }, 1000);
    },
  },

  mounted() {
    this.getUserTasks();
  },
};
</script>
  
<style>
/* 样式可以根据需要添加在这里 */
</style>
  