<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center text-md-left">
                    <p class="footer-text">&copy; {{ currentYear }} Your Company Name. All rights reserved.</p>
                </div>
                <div class="col-md-6 text-center text-md-right">
                    <a class="github-link" href="https://github.com/yourusername/your-repo" target="_blank"
                        rel="noopener noreferrer">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
  
<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
};
</script>
  
<style scoped>
.footer {
    background-color: #000;
    /* Black background */
    padding: 20px 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    color: #fff;
    /* White text color */
}

.footer-text {
    margin-bottom: 0;
    font-size: 14px;
    /* Remove default margin for <p> element */
}

.github-link {
    color: #fff;
    /* White link color */
    text-decoration: none;
    font-size: 20px;
}

.github-link:hover {
    color: #e1e1e1;
    /* Change link color on hover */
}

/* You can add more specific Bootstrap classes here */
</style>
  