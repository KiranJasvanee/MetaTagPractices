import Vue from "vue";

const metaDataWrapper = {
  wrapMetaData(metaTitle, metaDesc, path, metaImagePath) {
    // `this` inside methods point to the Vue instance
    console.log("Head called to get meta data inside: " + path);
    return {
      title: metaTitle,
      meta: [
        // Title
        {
          hid: `og:title`,
          name: "og:title",
          content: metaTitle
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: metaTitle
        },
        // Image
        {
          hid: `og:image:secure`,
          name: "og:image:secure",
          content: metaImagePath
        },
        {
          hid: `og:image`,
          name: "og:image",
          content: metaImagePath
        },
        {
          hid: `twitter:image`,
          name: "twitter:image",
          content: metaImagePath
        },
        // Description
        {
          hid: `description`,
          name: "description",
          content: metaDesc
        },
        {
          hid: `og:description`,
          name: "og:description",
          content: metaDesc
        },
        {
          hid: `twitter:description`,
          name: "twitter:description",
          content: metaDesc
        },
        // Site URL
        {
          hid: `og:url`,
          name: "og:url",
          content: metaDesc
        },
        // Other
        {
          hid: `twitter:site`,
          name: "twitter:site",
          content: "@KiranJasvanee"
        },
        {
          hid: `keywords`,
          name: "keywords",
          content:
            "coffee with swift, apple, swift, hacking, developer, iOS developer, news, iOS news, tutorials, swift, ios, macos, watchos, tvos, api, swift 5, swift 4, swift, swiftui, swift ui, tutorial, ios, ios 13, ios 12, ios 11, wwdc, apple, ipad, iphone, free, tutorial, guide, objective c, watchos, tvos, macOS, uikit, watchkit"
        },
        {
          hid: `author`,
          name: "author",
          content: "Kiran Jasvanee"
        }
      ],
      link: [
        {
          rel: "canonical",
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
