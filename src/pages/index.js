import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ProfileImage from "../components/ProfileImageComponent"
import EducationList from "../components/EducationListComponent"
import ExperienceList from "../components/ExperienceListComponent"
import ShortDetailList from "../components/ShortDetailListComponent"
import Technical from "../components/TechnicalComponent"
import { graphql } from "gatsby"

var widthMatchParent = {
  width: "100%",
}
var website = {
  backgroundColor: "#EEEEEE",
}
var leftSection = {
  backgroundColor: "#EEEEEE",
}

const Main = ({ resumeData }) => (
  <div className="mdl-grid" style={website}>
    <div
      className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--4-col-phone"
      style={leftSection}
    >
      <div>
        <ProfileImage name={resumeData.name} />
        <ShortDetailList {...resumeData} />
        {/* <Technical {...resumeData} /> */}
      </div>
    </div>
    <div className="mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--4-col-phone">
      <EducationList education={resumeData.education} />
      <ExperienceList {...resumeData} />
    </div>
  </div>
)

const IndexPage = ({ data }) =>
  console.log(">>>>data", data) || (
    <Layout>
      <SEO title="Home" />
      <Main resumeData={data.allContentfulInformation.edges[0].node.data} />
    </Layout>
  )

export default IndexPage

export const query = graphql`
  query {
    allContentfulInformation {
      edges {
        node {
          data {
            ...profileInfoFragment
          }
        }
      }
    }
  }
`
