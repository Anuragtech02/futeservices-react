export const UrlStrings = {
    HOME : "/",
    ABOUT : "/about",
    OURTEAM : "/team",
    CONTACTUS : "/contact",
    FAQ : "/faq",
    PORTFOLIO : "/portfolio",
}

export const HeaderData = {
    tabs:[
        {
            label: "Home", 
            id: "home",
            path: UrlStrings.HOME,
            exact: true,
            subheader: null,
        },
        {
            label: "Pages", 
            id: "pages",
            path: UrlStrings.ABOUT+UrlStrings.CONTACTUS+UrlStrings.FAQ+UrlStrings.OURTEAM,
            exact: false,
            subheader: [
                {label: "About Us", id: "pages", path: UrlStrings.ABOUT},
                {label: "Our Team", id: "pages", path: UrlStrings.OURTEAM},
                {label: "Contact Us", id: "pages", path: UrlStrings.CONTACTUS},
                {label: "FAQ", id: "pages", path: UrlStrings.FAQ},
            ],
        },
        {
            label: "Portfolio", 
            id: "portfolio",
            path: UrlStrings.PORTFOLIO,
            exact: false,
            subheader: [
                {label: "Portfolio 1", id: "potfolio", path: UrlStrings.PORTFOLIO},
                {label: "Portfolio 2", id: "potfolio", path: UrlStrings.PORTFOLIO},
                {label: "Portfolio 3", id: "potfolio", path: UrlStrings.PORTFOLIO},
            ],
        },
    ]
}
