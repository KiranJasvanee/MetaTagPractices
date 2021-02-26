import Vue from "vue";

const metaDataWrapper = {
  wrapMetaData(metaTitle, metaDesc) {
    // `this` inside methods point to the Vue instance
    return {
      title: metaTitle,
      meta: [
        {
          hid: `description`,
          name: "description",
          content: metaDesc
        },
        {
          hid: `twitter:description`,
          name: "twitter:description",
          content: metaDesc
        },
        {
          hid: `og:title`,
          name: "og:title",
          content: metaDesc
        },
      ]
    };
  }
};

//this is to help Webstorm with autocomplete
Vue.prototype.$metaDataWrapper = metaDataWrapper;

export default ({ app }, inject) => {
  inject("metaDataWrapper", metaDataWrapper);
};
