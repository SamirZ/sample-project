import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    flex-grow: 1;
    padding: 1rem 2rem;
    margin: 2rem 1rem;
    border: 1px solid orange;
    border-radius: 5px;
    outline: none !important;
    transition: all 0.3s ease-in-out;
    &:focus {
        box-shadow: inset 0px 0px 8px 0px orange;
    }
`;

export const Input = forwardRef<
    HTMLInputElement,
    Omit<JSX.IntrinsicElements['input'], 'ref'>
>(({ ...props }, forwardedRef) => (
    <StyledInput ref={forwardedRef} {...props} />
));
