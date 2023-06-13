import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 2px 2px 0px #bbb;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;

    @media (max-width: 750px) {
        padding: 10px;
        font-size: 11px;  
    }

    @media (max-width: 280px) {
        padding: 8px;
        font-size: 9px;  
    }
`

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;

    @media (max-width: 750px) {
        font-size: 20px;  
    }

    @media (max-width: 280px) {
        font-size: 16px;  
    }
`

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`