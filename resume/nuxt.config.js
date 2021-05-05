import cheerio from "cheerio";
export default {
  target: "static",
  render: { resourceHints: false },
  css: ["~/css/main.css"],
  head: {
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Poppins:400,500,700,800&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
      }
    ]
  },
  hooks: {
    "generate:page": page => {
      const doc = cheerio.load(page.html);
      doc(`body script`).remove();
      doc(`link[as="script"]`).remove();
      page.html = doc.html();
    }
  },
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        loader: "js-yaml-loader"
      });
    }
  },
  buildModules: ["@nuxtjs/svg"]
};
