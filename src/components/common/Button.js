import React from 'react';
import styled from 'styled-components';
import palette from './../../lib/styles/palette';

const StyledButton = styled.button`
    color:white;
    background: ${palette.gray[8]};
    &:hover {
        background: ${palette.gray[6]};
    }
`
const Button = (props) => {
    return (
        <StyledButton {...props}/>
    );
};

export default Button;