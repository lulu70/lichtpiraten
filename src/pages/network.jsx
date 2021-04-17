import React from "react"
import Divider from "../components/reusables/Divider"
import Layout from "../components/reusables/Layout"
import SEO from "../components/reusables/seo"
import SizeWrapper from "../components/reusables/SizeWrapper"

const Network = () => {
  return (
    <>
      <SEO title="Network" />
      <Layout>
        <section id="main">
          <SizeWrapper className="py-12">
            <h1 className="text-center text-xl font-light text-gray-400">
              NETWORK
            </h1>
            <Divider />
          </SizeWrapper>
        </section>
      </Layout>
    </>
  )
}

export default Network
