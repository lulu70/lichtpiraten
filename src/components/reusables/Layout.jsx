import React from "react"
import ScrollTopButton from "./ScrollTopButton.jsx"
import Footer from "./Footer.jsx"
// import CookieConsent from "./CookieConsent"

const Layout = ({ children }) => {
  return (
    <div
      id="layout-wrapper"
      className="relative overflow-hidden flex flex-col min-h-screen hd:max-w-screen-hd hd:m-auto"
    >
      <main className="container-fluid">{children}</main>
      <Footer />
      {/* <CookieConsent /> */}
      <ScrollTopButton />
    </div>
  )
}

export default Layout
