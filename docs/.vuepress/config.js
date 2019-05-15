module.exports = {
  title: "Taller de programación y automatismos",
  description: "Guía de Clases",
  base: "/cursoPTI/",
  ga: "true",
  // markdown: {
  //   extendMarkdown: md => {
  //     md.set({ breaks: true });
  //     md.use(require("markdown-it-imsize"));
  //   }
  // },
  head: [
    [
      "link",
      { rel: "icon", type: "image/x-icon", href: "/public/img/favicon.ico" }
    ]
  ],
  serviceWorker: "true",
  themeConfig: {
    logo: "/img/Antel_Logo.jpg",
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Clases", link: "/clases/" },
      { text: "Definiciones", link: "/definiciones/" },
      { text: "Kit", link: "/sensores/" },
      { text: "Blockly", link: "https://blockly-games.appspot.com/?lang=es" }
    ],
    displayAllHeaders: false,
    // logo: "/public/img/logo-sideBar.png",
    sidebar: [
      ["/", "Inicio"],
      ["/clases/clase-1/", "Clase 1"],
      ["/clases/clase-2/", "Clase 2"],
      ["/clases/clase-3/", "Clase 3"],
      ["/clases/clase-4/", "Clase 4"],
      ["/clases/clase-5/", "Clase 5"],
      ["/clases/clase-6/", "Clase 6"]
      // ["/clases/clase-7/", "Clase 7"],
      // ["/clases/clase-8/", "Clase 8"]
    ]
  }
};
