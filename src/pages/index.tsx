import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import tw from "twin.macro"

import Home from "../assets/home.inline.svg"
import Plan from "../plan/plan"

const CounterContainer = tw.div`flex flex-col h-full w-full items-center justify-center`
const Line = tw.div`flex items-center`
const IconContainer = tw.div`w-16 lg:w-36`

const IndexPage = () => (
  <Layout>
    <Seo title={"Home"} />
    <Plan />
  </Layout>
)

export default IndexPage
