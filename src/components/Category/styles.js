import styled from "@emotion/styled";
import { Link } from "wouter";
import { bps } from 'styles'

const primaryColor = props => props.theme.colors.primary
const secondaryColor = props => props.theme.colors.secondary

export const CategoryTitle = styled.h1`
  color: #06D2B2 ;
  ${bps.greaterThanMobile} {
    font-size: 2rem;
  }
`

export const CategoryList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    justify-content: center;
`

export const CategoryListItem = styled.li`
  list-style: none;
  padding: 0.3rem;
  margin: 0.2rem;
  font-size: 1.2rem;
  background: linear-gradient(110deg, ${primaryColor} 60%, ${secondaryColor} 60%);
  &:hover {
    transform: scale(1.02);
    background: linear-gradient(110deg, ${secondaryColor} 60%,${primaryColor} 60%);
  }
`

export const CategoryLink = styled(Link)`
    color: #fff;
`