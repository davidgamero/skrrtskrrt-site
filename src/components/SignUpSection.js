import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Button from 'react-bootstrap/Button';

import BackgroundImage from 'gatsby-background-image'

const SignUpButton = styled(Button)`
  font-size: 1rem;

  @media(min-width: 750px) {
    font-size: 1.5rem;
  }
`

const Div = styled.div`
  text-align: left;
  padding: 1rem;

  @media(min-width: 750px) {
    padding: 4rem;
  }
`

const H1 = styled.h1`
  color: white;
  margin: 0;
  font-family: "Helvetica Neue";
  font-size: 2rem;
  font-weight: bold;

  @media(min-width: 750px) {
    font-size: 2rem;
  }
`

const H3 = styled.h1`
  color: white;
  margin: 0;
  font-family: "Helvetica Neue";
  font-size: 1rem;

  @media(min-width: 750px) {
    font-size: 1rem;
  }
`

const P = styled.p`
color: white;
margin: 0;
font-family: "Helvetica Neue";
font-size: 1rem;
line-height: 4rem;

@media(min-width: 750px) {
  font-size: 1rem;
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
            {/* #TODO Break into two lines on mobile */}
            <H1>Burn Rubber, Not Gas.</H1>

            {/* <H1>No Contract. No BS.</H1>
            <H1>Get Where Your Going.</H1> */}

            <H3>Introducing Skrrt, the first ever electric cafe racer subscription</H3>
            <P>Our beta is launching in Atlanta in two weeks</P>
            {/* #TODO Get early access to the beta in two weeks */}
            {/* #TODO Bold, small, move to top left*/}

            <SignUpButton variant="outline-light">
              Sign up now
            </SignUpButton>

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
  background-repeat: repeat - y;
  background-size: cover;
  display: flex;
  justify-content: left;
  align-items: center;
`

export default StyledSignUpSection