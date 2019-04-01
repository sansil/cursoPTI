module.exports = {
  title: "Electrónica y Programación Básica",
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
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Clases", link: "/clases/" },
      { text: "Scratch", link: "https://scratch.mit.edu/projects/editor/" },
      { text: "Arduino", link: "https://www.arduino.cc" }
    ],
    displayAllHeaders: false,
    // logo: "/public/img/logo-sideBar.png",
    sidebar: [
      ["/", "Inicio"],
      ["/clases/clase-1/", "Clase 1"],
      ["/clases/clase-2/", "Clase 2"]
    ]
  }
};
