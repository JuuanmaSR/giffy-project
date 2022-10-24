/** @jsxImportSource @emotion/react */
import Button from "components/Button/Button"
import { css, keyframes } from '@emotion/react'

const tabAnimation = keyframes`
    from{box-shadow: inset -3px 0px 0px #888;}
    to{box-shadow: inset -3px 0px 0px transparent;}
`

const titleErrorStyles = css`
    font-size: 50px;
    display: inline-block;
    padding-right: 12px;
    animation: ${tabAnimation} .5s alternate infinite;
`

const pageErrorStyles = css`
    display: flex;
    flex-direction: column ;
`

const PageNotFound = () => {
    return <>
        <div css={pageErrorStyles}>
            <h1 css={titleErrorStyles}> Error 404 </h1>
            <Button href='/'>Go to home</Button>
        </div>

    </>
}

export default PageNotFound