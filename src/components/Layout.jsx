import * as React from "react";
import { Helmet } from "react-helmet";

import Footer from "./Footer";
import Header from "./Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/roboto-slab";
import "@fontsource/montserrat";
import "./css/app.scss";

import useSiteMetadata from "./SiteMetadata";

import { withPrefix } from "gatsby";

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        /> */}
        {/* NEED TO ADD 32x32 FAVICON AND 64x64 FAVICON */}
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon.ico`}
        />
        {/* <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon.icFvo`}
        /> */}
        {/* <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        /> */}
        <meta name="theme-color" content="#fff" />

        {/* <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        /> */}
      </Helmet>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
