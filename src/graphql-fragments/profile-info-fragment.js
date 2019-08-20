import { graphql } from "gatsby"

export const profileInfoFragment = graphql`
  fragment profileInfoFragment on contentfulInformationDataJsonNode {
    id
    name
    address
    designation
    dob
    profession
    education {
      field
      grade
      degree
      toYear
      fromYear
      extraActivity
      instituteName
    }
    email
    experience {
      city
      state
      company
      country
      duration
      description
      designation
    }
    experienceSummary
    technical {
      databases {
        name
        value
      }
      frameworks {
        name
        value
      }
      languages {
        name
        value
      }
    }
  }
`
