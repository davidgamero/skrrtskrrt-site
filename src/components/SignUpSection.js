import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Div = styled.div`
  text-align: left;
  padding: 1rem;

  @media(min-width: 750px){
    padding: 4rem;
  }
`

const H1 = styled.h1`
  color: white;
  margin: 0;
  font-family: "Helvetica Neue";
  font-size: 2rem;
  font-weight: bold;

  @media(min-width: 750px){
    font-size: 3rem;
  }
`

const P = styled.p`
  color: white;
  margin: 0;
  font-family: "Helvetica Neue";
  font-size: 1rem;
  line-height: 4rem;

  @media(min-width: 750px){
    font-size: 2rem;
  }
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
            <H1>Burn Rubber, Not Gas.</H1>
            <H1>No Contract.</H1>
            <H1>No BS.</H1>
            <H1>Get Where Your Going.</H1>
            <P>Sign up for our beta launching in two weeks</P>

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
  justify-content: left;
  align-items: center;
`

export default StyledSignUpSection