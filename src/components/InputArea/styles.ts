import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 2px 2px 0px #bbb;
    padding: 20px;
    margin-top: 0;
    display: flex;
    align-items: center;

    @media (max-width: 750px) {
        padding: 10px;
    }
`

export const InputLabel = styled.label`
    flex: 1;
    margin: 10px;

    @media (max-width: 750px) {
        margin: 5px;
        font-size: 11px;  
    }

    @media (max-width: 280px) {
        margin: 3px;
        font-size: 10px;  
    }
`

export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`

export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid black;
    border-radius: 5px;

    @media (max-width: 750px) {
        width: 40px;
        font-size: 11px;  
    }

    @media (max-width: 280px) {
        width: 35px;
        font-size: 8px;  
    }
`

export const Select = styled.select`
    width: 100%;
    height: 32px;
    padding: 0 5px;
    border: 1px solid black;
    border-radius: 5px;
`

export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: none;
    border-radius: 5px;
    background-color: blue;
    color: white;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
        background-color: #007;
    }

    @media (max-width: 280px) {
        font-size: 8px;  
    }
`
