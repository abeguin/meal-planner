import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import tw from "twin.macro"

import Home from "../assets/home.inline.svg"
import Plan from "../plan/plan"
import Summary from "../plan/summary"

const Main = tw.div`grid grid-cols-1 lg:grid-cols-2 mx-4 lg:gap-8`

const IndexPage = () => (
  <Layout>
    <Seo title={"Home"} />
    <Main>
      <Plan />
      <Summary />
    </Main>
  </Layout>
)

export default IndexPage
