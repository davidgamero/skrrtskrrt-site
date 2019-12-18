import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Div = styled.div`
  text-align: center;
`

const H1 = styled.h1`
  color: white;
  margin: 0;
  font-family: "Helvetica Neue";
  font-size: 4rem;
  letter-spacing: 0.8rem;
`

const H2 = styled.h2`
  color: white;
  margin: 0;
  font-family: "Helvetica Neue";
  font-size: 2rem;
  letter-spacing: 0.2rem;
`

const SignUpSection = ({ className }) => (
  <StaticQuery
    query={graphql`
query {
  desktop: file(relativePath: { eq: "sign-up-bike-bg.jpg" }) {
    childImageSharp {
      fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
`}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <Div>
            <H1>SkrrtSkrrt</H1>
            <H2>Welcome to the future of Transportation</H2>

          </Div>

        </BackgroundImage>
      )
    }}
  />
)

const StyledSignUpSection = styled(SignUpSection)`
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-position: left;
  background-repeat: repeat-y;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default StyledSignUpSection