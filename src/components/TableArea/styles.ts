import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    padding: 20px 25px;
    margin-top: 20px;
    background-color: #FFF;
    box-shadow: 2px 2px 0px #bbb;
    border-spacing: 0 3px;

    @media (max-width: 750px) {
        padding: 10px 12px;
        font-size: 11px;  
    }

    @media (max-width: 280px) {
        padding: 8px;
        font-size: 9px;  
    }
`

export const TableHeadColumn = styled.th<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px;
    text-align: left;

    @media (max-width: 750px) {
        width: ${props => props.width ? `calc(${props.width}px - 10px)` : 'auto'};
        padding: 10px 10px 10px 0;
    }
`