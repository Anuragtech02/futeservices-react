export const UrlStrings = {
  HOME: "/",
  ABOUT: "/about",
  OURTEAM: "/team",
  CONTACTUS: "/contact",
  QUOTE: "/quote",
  FAQ: "/faq",
  PORTFOLIO: "/portfolio",
  SERVICES: "/what-we-do",
  NEWS_ROOM: "/news-room",
};

export const HeaderData = {
  tabs: [
    {
      label: "Home",
      id: "home",
      path: UrlStrings.HOME,
      left: true,
      exact: true,
      subheader: null,
    },
    {
      label: "About Us",
      id: "about",
      path: UrlStrings.ABOUT,
      exact: true,
      left: true,
      subheader: null,
    },
    {
      label: "What We Do",
      id: "pages",
      path: UrlStrings.SERVICES,
      left: true,
      exact: true,
      // subheader: [
      //     {label: "About Us", id: "pages", path: UrlStrings.ABOUT},
      //     {label: "Our Team", id: "pages", path: UrlStrings.OURTEAM},
      //     {label: "Contact Us", id: "pages", path: UrlStrings.CONTACTUS},
      //     {label: "FAQ", id: "pages", path: UrlStrings.FAQ},
      // ],
    },

    {
      label: "Portfolio",
      id: "portfolio",
      left: true,
      path: UrlStrings.PORTFOLIO,
      exact: true,
      subheader: null,
    },
    {
      label: "News Room",
      id: "news-room",
      path: UrlStrings.NEWS_ROOM,
      exact: true,
      // subheader: [
      //     {label: "Portfolio 1", id: "potfolio", path: UrlStrings.PORTFOLIO},
      //     {label: "Portfolio 2", id: "potfolio", path: UrlStrings.PORTFOLIO},
      //     {label: "Portfolio 3", id: "potfolio", path: UrlStrings.PORTFOLIO},
      // ],
    },
    {
      label: "Contact Us",
      id: "contact",
      path: UrlStrings.CONTACTUS,
      exact: true,
      // subheader: [
      //     {label: "Portfolio 1", id: "potfolio", path: UrlStrings.PORTFOLIO},
      //     {label: "Portfolio 2", id: "potfolio", path: UrlStrings.PORTFOLIO},
      //     {label: "Portfolio 3", id: "potfolio", path: UrlStrings.PORTFOLIO},
      // ],
    },
    {
      label: "Get Quote",
      id: "portfolio",
      path: UrlStrings.QUOTE,
      exact: true,
      // subheader: [
      //     {label: "Portfolio 1", id: "potfolio", path: UrlStrings.PORTFOLIO},
      //     {label: "Portfolio 2", id: "potfolio", path: UrlStrings.PORTFOLIO},
      //     {label: "Portfolio 3", id: "potfolio", path: UrlStrings.PORTFOLIO},
      // ],
    },
  ],
};

export const FooterData = {
  tabs: [
    { label: "Home", id: "home", path: UrlStrings.HOME },
    // { label: "About Us", id: "pages", path: UrlStrings.ABOUT },
    { label: "Our Services", id: "services", path: UrlStrings.SERVICES },
    // { label: "Our Team", id: "pages", path: UrlStrings.OURTEAM },
    { label: "Contact", id: "pages", path: UrlStrings.CONTACTUS },
    { label: "Quote Enquiry", id: "pages", path: UrlStrings.QUOTE },

    // { label: "FAQ", id: "pages", path: UrlStrings.FAQ },
  ],
};
