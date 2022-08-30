import Head from "next/head";
import { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

const Layout = ({
  children,
  parent,
  sub,
  subChild,
  noBreadcrumb,
  headerStyle,
}) => {
  const [isToggled, setToggled] = useState(false);
  const toggleClick = () => {
    setToggled(!isToggled);
    isToggled
      ? document.querySelector("body").classList.remove("mobile-menu-active")
      : document.querySelector("body").classList.add("mobile-menu-active");
  };

  return (
    <>
      <Head>
        <title>Digital Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/FaviconLogo.png" />
        {/* <style>@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Spartan:wght@300;400;500;600;700&display=swap');</style> */}
      </Head>

      {isToggled && (
        <div className="body-overlay-1" onClick={toggleClick}></div>
      )}

      <Header
        headerStyle={headerStyle}
        isToggled={isToggled}
        toggleClick={toggleClick}
      />
      <MobileMenu isToggled={isToggled} toggleClick={toggleClick} />
      <main className="main">
        <Breadcrumb
          parent={parent}
          sub={sub}
          subChild={subChild}
          noBreadcrumb={noBreadcrumb}
        />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
