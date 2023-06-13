import styled from "styled-components";

export const TableLine = styled.tr`
    width: 100%;
    background-color: #e7e7e7;
    border-radius: 5px;
`

export const TableColumn = styled.td<{ padding?: string }>`
    padding: 10px;
`
export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 5px;
    border-radius: 5px;
    color: #FFF;
    background-color: ${props => props.color};
`

export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
`

export const Button = styled.button`
    width: 25px;
    height: 25px;
    background: transparent;
    border: none;
    padding: 0;
`