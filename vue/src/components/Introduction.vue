<template>
    <div class="container project-card">
        <div class="row">
            <div class="col-md-12">
                <h1 class="project-title">{{ projectName }}</h1>
                <h3 class="project-description">{{ projectDescription }}</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2">
                <button class="btn btn-dark btn-block px-3 py-2">Create new Task</button>
            </div>
            <div class="col-md-8">
                <button class="btn btn-outline-dark btn-block btn-doc border-2 px-3 py-2"> Go to the docs</button>
            </div>
            <div class="col-md-2 text-md-right">
                <a href="#" class="text-dark"> How it works</a>
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
    padding: 20px;
    margin-top: 30px;

    .project-title {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 600;
        font-size: 40px;
        margin-bottom: 30px;
    }

    .project-description {
        font-size: 20px;
        margin-bottom: 30px;
    }


}
</style>
  