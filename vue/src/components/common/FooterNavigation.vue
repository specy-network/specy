<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-center text-md-left">
          <p class="footer-text">
            &copy; {{ currentYear }} Specy Network. All rights reserved.
          </p>
        </div>
        <div class="col-md-6 text-center text-md-right">
          <a
            class="github-link"
            href="https://github.com/wanxiang-blockchain/2023WXH-Specy/tree/main/src/specy"
            target="_blank"
            rel="noopener noreferrer"
          >
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
      footerFixed: true,
    };
  },
};
</script>
  
<style scoped lang="scss">
.footer {
  background-color: rgb(45, 114, 179);
  /* Black background */
  padding: 20px 0;
  /* position: fixed; */
  width: 100%;
  color: #fff;
  /* White text color */
  bottom: 0; /* 初始定位在底部 */
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
  