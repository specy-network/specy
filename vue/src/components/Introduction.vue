<template>
    <div class="container project-card p-2 mt-6">
        <div class="row">
            <div class="col-md-12 ">
                <h1 class="project-title text-xxs mb-5">{{ projectName }}</h1>
                <h3 class="project-description mb-4">{{ projectDescription }}</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2 col-12  ">
                <button class="btn btn-dark btn-block border-2 px-3 py-2  mb-3">Create new Task</button>
            </div>
            <div class="col-md-8 col-12">
                <button class="btn btn-outline-dark btn-block   border-2 px-3 py-2  mb-1"> Go to the docs</button>
            </div>
            <div class="col-md-2 text-right">
                <i class="fas fa-question-circle"></i><a href="#" class="text-dark"> How it works</a>
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


</style>
  