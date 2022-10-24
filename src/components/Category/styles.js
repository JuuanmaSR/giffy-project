import styled from "@emotion/styled";
import { Link } from "wouter";
import { bps } from 'styles'

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
  background: linear-gradient(110deg, #06D2B2 60%, #0069ed 60%);
  &:hover {
    transform: scale(1.02);
    background: linear-gradient(110deg, #0069ed 60%,#06D2B2 60%);
  }
`

export const CategoryLink = styled(Link)`
    color: #fff;
`