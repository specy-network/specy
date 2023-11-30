<template>
  <div class="container pt-5">
    <div class="pl-4">
      <router-link to="/home" class="text-dark"
        ><i class="fas fa-arrow-circle-left"
          ><span class="ml-2">Home</span></i
        ></router-link
      >
      <Detail></Detail>
    </div>
  </div>
</template>
    
  <script>
import Detail from "../components/task/Detail.vue";
export default {
  components: {
    Detail,
  },
  data() {
    return {
      task: null,
    };
  },
  methods: {},

  mounted() {},
};
</script>
    
  <style>
/* 样式可以根据需要添加在这里 */
</style>

