<template>
 <div>
   <h1>About Page 1</h1>
   <nuxt />
 </div>
</template>

<script>
export default {
   head () {
     return this.greet('About Testing Param Title', `About Testing Description - 1`)
  },
  methods: {
    greet: function (metaTitle, metaDesc) {
      // `this` inside methods point to the Vue instance 
      return {
        title: metaTitle,
        meta: [{
          hid: `description`,
          name: 'description',
          content: metaDesc
        }
        ],
      }
      // console.log('Got the thing. ' + metaTitle)
      
    }
  }
}
</script>