export const UrlStrings = {
  HOME: "/",
  ABOUT: "/about",
  OURTEAM: "/team",
  CONTACTUS: "/contact",
  QUOTE: "/quote",
  FAQ: "/faq",
  PORTFOLIO: "#portfolio",
};

export const HeaderData = {
  tabs: [
    {
      label: "Home",
      id: "home",
      path: UrlStrings.HOME,
      exact: true,
      subheader: null,
    },
    {
      label: "Portfolio",
      id: "pages",
      path: UrlStrings.PORTFOLIO,
      exact: true,
      // subheader: [
      //     {label: "About Us", id: "pages", path: UrlStrings.ABOUT},
      //     {label: "Our Team", id: "pages", path: UrlStrings.OURTEAM},
      //     {label: "Contact Us", id: "pages", path: UrlStrings.CONTACTUS},
      //     {label: "FAQ", id: "pages", path: UrlStrings.FAQ},
      // ],
    },
    {
      label: "Contact",
      id: "portfolio",
      path: UrlStrings.CONTACTUS,
      exact: true,
      // subheader: [
      //     {label: "Portfolio 1", id: "potfolio", path: UrlStrings.PORTFOLIO},
      //     {label: "Portfolio 2", id: "potfolio", path: UrlStrings.PORTFOLIO},
      //     {label: "Portfolio 3", id: "potfolio", path: UrlStrings.PORTFOLIO},
      // ],
    },
    {
      label: "Quote Enquiry",
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
    { label: "Portfolio", id: "pages", path: UrlStrings.PORTFOLIO },
    // { label: "Our Team", id: "pages", path: UrlStrings.OURTEAM },
    { label: "Contact", id: "pages", path: UrlStrings.CONTACTUS },

    // { label: "FAQ", id: "pages", path: UrlStrings.FAQ },
  ],
};
