<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">nuxt-blog-seo</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    // Process to deply project at github pages.
    // https://nuxtjs.org/docs/2.x/deployment/github-pages/
    return this.$metaDataWrapper.wrapMetaData(
      "Testing Param Title-1",
      `Testing Description-1`,
      this.$route.fullPath,
      "https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
    );
    ///return this.greet('Testing Param Title', `Testing Description - 1`)
  },
  created() {
    console.log("created: " + this.$route.fullPath);
  },
  methods: {
    // greet: function (metaTitle, metaDesc) {
    //   // `this` inside methods point to the Vue instance
    //   return {
    //     title: metaTitle,
    //     meta: [{
    //       hid: `description`,
    //       name: 'description',
    //       content: metaDesc
    //     }
    //     ],
    //   }
    //   // console.log('Got the thing. ' + metaTitle)
    // }
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
