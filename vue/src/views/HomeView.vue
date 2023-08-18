<template>
    <div>
        <Introduction :projectName="projectName" :projectDescription="projectDescription" />
        <ShowTasks title="My tasks" :data="tableData" :itemsPerPage="5" />
    </div>
</template>
  
<script>
import Introduction from "../components/Introduction.vue";
import ShowTasks from "../components/ShowTasks.vue";

export default {
    components: {
        Introduction,
        ShowTasks
    },
    data() {
        return {
            projectName: "Specy  Automation",
            projectDescription: "Automate your Cosmos ecosystem TX with the Specy Network.",
            tableData: [
                { column1: "Data 1-1", column2: "Data 1-2", column3: "Data 1-3" },
                { column1: "Data 2-1", column2: "Data 2-2", column3: "Data 2-3" },
                // ... more data
            ]
        };
    }
};
</script>
  
<style>
/* 样式可以根据需要添加在这里 */
</style>
  