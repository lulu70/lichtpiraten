import React from "react"
import Divider from "../components/reusables/Divider"
import Layout from "../components/reusables/Layout"
import SEO from "../components/reusables/seo"
import SizeWrapper from "../components/reusables/SizeWrapper"

const Imprint = () => {
  return (
    <>
      <SEO title="Imprint" />
      <Layout>
        <section id="main">
          <SizeWrapper className="py-12">
            <h2 className="text-center text-xl font-light text-gray-400">
              IMPRINT
            </h2>
            <Divider />
            <h1 className="text-7xl font-bold text-center mt-4">IMPRINT</h1>
            <div className="space-y-8 mt-8 text-gray-400 font-light">
              <p>
                The following provides mandatory data concerning the provider of
                this website as required by German law.
              </p>
              <p>Provider</p>
              <p>
                The provider of this Internet site within the legal meaning of
                the term is the registered company Biostructure GmbH
              </p>
              <p>Address & Phone number</p>
              <div>
                <p>Biostructure GMbh.</p>
                <p>Wallmow 55 D-17292 Carmzow-Wallmow</p>
                <p>+49 (0) 175 16 35937</p>
                <p>cm@biostructure.de</p>
              </div>
              <p>CEO</p>
              <p>Caren Mueller</p>
              <p>Value Added Tax Identification Number.</p>
              <p>UStNr 062/106/02591</p>
              <p>Copyright</p>
              <p>
                The layout, graphics employed and any other contents on the
                homepage of the LiCHTPiRATEN internet site are protected by
                copyright law.
              </p>
              <div>
                <p>© Copyright - All rights reserved 2014.</p>
                <p>
                  LiCHTPiRATEN is a brand developed by Biostructure GmbH.
                  Wallmow 55 D-17292 Carmzow-Wallmow
                </p>
              </div>
            </div>
          </SizeWrapper>
        </section>
      </Layout>
    </>
  )
}

export default Imprint
