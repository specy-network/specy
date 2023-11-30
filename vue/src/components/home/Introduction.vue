<template>
  <div class="container project-card p-2 mt-6">
    <div class="row">
      <div class="col-md-12 mt-5">
        <h1 class="project-title text-xxs mb-5">{{ projectName }}</h1>
        <h3 class="project-description mb-4 font-second-color">
          {{ projectDescription }}
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2 col-12">
        <router-link to="/task">
          <button class="main-btn btn-block px-3 py-2 mb-3">
            Create new Task
          </button>
        </router-link>
      </div>
      <div class="col-md-8 col-12">
        <button class="second-btn btn-block px-3 py-2 mb-1">
          <a
            target="_blank"
            href="https://specy-network.gitbook.io/specy-network/introduction/what-is-specy-network"
            class="font-main-color"
            >Go to the docs</a
          >
        </button>
      </div>
      <div class="col-md-2 text-right font-second-color">
        <i class="fas fa-question-circle"></i
        ><a
          target="_blank"
          href="https://specy-network.gitbook.io/specy-network/introduction/how-it-work"
          class="font-second-color"
        >
          How it works</a
        >
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    projectName: {
      type: String,
      required: true,
    },
    projectDescription: {
      type: String,
      required: true,
    },
  },
};
</script>
  
<style scoped lang="scss">
$main-color: rgb(45, 114, 179);
.main-btn {
  background-color: rgb(45, 114, 179);
  color: #fff;
  border: 2px solid rgb(45, 114, 179);
  border-radius: 5px;
  &:hover {
    background-color: rgb(20, 101, 176);
  }
}
.second-btn {
  border: 1px solid rgb(45, 114, 179);
  border-radius: 5px;
  color: rgb(45, 114, 179);
  &:hover {
    border: 2px solid rgb(20, 101, 176);
  }
}

.font-second-color {
  color: #757575;
}
.project-card {
  .project-title {
    font-weight: 600;
    font-size: 40px;
  }

  .project-description {
    font-size: 20px;
    margin-bottom: 30px;
  }
}
.font-main-color {
  color: $main-color;
}
a {
  text-decoration: none !important; /* 去除下划线 */
}
</style>
  