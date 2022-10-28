import styled from "@emotion/styled";
import { Button } from "components/Button/styles";

export const FavButton = styled(Button)`
    background:rgba(255, 255, 255, 0.855);
    border: 0;
    border-radius: 100px;
    cursor: pointer;
    padding: 0.5rem;
    position: absolute;
    top: -1px;
    left: 4px;
    &:focus {
        background:rgba(255, 255, 255, 0.855);
    }
    &:hover {
        background: rgba(255, 172, 172, .8);
        transform: scale(1.02);
    }
`
