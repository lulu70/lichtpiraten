import React from "react"
import "../../../src/styles/global.css"
import ErrorBoundary from "./ErrorBoundary"

const SiteWrapper = ({ children }) => {
  return <ErrorBoundary>{children}</ErrorBoundary>
}

export default SiteWrapper
