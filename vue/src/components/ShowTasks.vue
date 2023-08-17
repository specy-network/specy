<template>
    <div class="container">
        <h2 class="text-center">{{ title }}</h2>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Header 1</th>
                    <th>Header 2</th>
                    <th>Header 3</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, index) in currentPageData" :key="index">
                    <td>{{ row.column1 }}</td>
                    <td>{{ row.column2 }}</td>
                    <td>{{ row.column3 }}</td>
                </tr>
            </tbody>
        </table>
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                    <a class="page-link" href="#" @click="goToPage(currentPage - 1)">Previous</a>
                </li>
                <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
                    <a class="page-link" href="#" @click="goToPage(page)">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <a class="page-link" href="#" @click="goToPage(currentPage + 1)">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
  
<script>
export default {
    name: "ShowTasks",
    props: {
        title: {
            type: String,
            required: true,
        },
        data: {
            type: Array,
            required: true,
        },
        itemsPerPage: {
            type: Number,
            default: 5, // You can adjust the default value
        },
    },
    data() {
        return {
            currentPage: 1,
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.data.length / this.itemsPerPage);
        },
        currentPageData() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.data.slice(startIndex, endIndex);
        },
    },
    methods: {
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
    },
};
</script>
  
<style scoped>
/* You can add custom styling here */
</style>
  