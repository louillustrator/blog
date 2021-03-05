import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  background: #8797af;
  margin-bottom: 1.45rem;
`

const Headline = styled.div`
  padding-top: 100px;
  margin: 0 auto;
  height: 150px;
  max-height: 150px;
  width: 100%;
  /* padding: 1.45rem 1.0875rem; */
  h1 {
    margin: 0;
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <Headline>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
    </Headline>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
