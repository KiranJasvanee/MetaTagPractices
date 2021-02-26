import Vue from "vue";

const metaDataWrapper = {
  wrapMetaData(metaTitle, metaDesc, path) {
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
        {
          hid: `keywords`,
          name: "keywords",
          content: "Coffee with swift, apple, swift, hacking, developer, iOS developer, news, iOS news, tutorials, swift, ios, macos, watchos, tvos, api, swift 5, swift 4, swift, swiftui, swift ui, tutorial, ios, ios 13, ios 12, ios 11, wwdc, apple, ipad, iphone, free, tutorial, guide, objective c, watchos, tvos, macOS, uikit, watchkit"
        },
        {
          hid: `author`,
          name: "author",
          content: "Kiran Jasvanee"
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: path
        }
      ]
    };
  }
};

//this is to help Webstorm with autocomplete
Vue.prototype.$metaDataWrapper = metaDataWrapper;

export default ({ app }, inject) => {
  inject("metaDataWrapper", metaDataWrapper);
};
