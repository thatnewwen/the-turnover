module.exports = {
  pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: "The Turnover - a sports publication", // Navigation and Site Title
  titleAlt: "The Turnover", // Title for JSONLD
  description: "A sports collective of sorts.",
  headline: "The Turnover", // Headline for schema.org JSONLD
  url: "https://theturnover.club", // Domain of your site. No trailing slash!
  siteLanguage: "en", // Language Tag on <html> element
  logo: "static/logos/logo-1024.png", // Used for SEO
  ogLanguage: "en_US", // Facebook Language

  // JSONLD / Manifest
  favicon: "static/logos/logo-1024.png", // Used for manifest favicon generation
  shortName: "Prismic", // shortname for manifest. MUST be shorter than 12 characters
  author: "commonworks", // Author for schemaORGJSONLD
  themeColor: "#3D63AE",
  backgroundColor: "#EBEDF2",

  twitter: "@theturnover23", // Twitter Username
  facebook: "theturnover", // Facebook Site Name
  googleAnalyticsID: "UA-47519312-7",

  skipNavId: "reach-skip-nav", // ID for the "Skip to content" a11y feature
};
