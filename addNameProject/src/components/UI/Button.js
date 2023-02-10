import React from 'react';
import styled from 'styled-components';
export const Button = styled.button`
    background-color: green;
    color: white;
    width: 200px;
    padding: 5px 10px;
    margin: 20px;
    border: 2px solid darkgreen;
    onClick: ${(props) => props}
`
