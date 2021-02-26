<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-blog-seo
      </h1>
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
   head () {
     // Process to deply project at github pages.
     // https://nuxtjs.org/docs/2.x/deployment/github-pages/
     return this.$metaDataWrapper.wrapMetaData('Testing Param Title-1', `Testing Description-1`)
     ///return this.greet('Testing Param Title', `Testing Description - 1`)    
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
  }
}
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
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
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
