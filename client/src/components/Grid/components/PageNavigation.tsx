import React from 'react';
import styled from 'styled-components';
import { Button } from '../../NavigationMenu';

const PageCountWrapper = styled.div`
    margin-top: 1rem;
    border-top: 2px solid orange;
    transition: all 0.5s ease-in-out;
    padding: 1rem;
    text-align: end;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
        margin: 0 0.5rem;
        &:last-child {
            margin-right: 1rem;
        }
    }

    span {
        border-left: 2px solid orange;
        padding: 1rem;
    }

    div {
        display: flex;
    }
`;

interface Props {
    page: number;
    totalPages: number;
    showPreviuos: () => void;
    showNext: () => void;
}

export const PageNavigation: React.FC<Props> = ({
    page,
    totalPages,
    showPreviuos,
    showNext,
}) => {
    return (
        <PageCountWrapper>
            <div>
                <Button onClick={showPreviuos}>Previous</Button>
                <Button onClick={showNext}>Next</Button>
            </div>
            <div>
                <span>
                    Page {page} of {totalPages}
                </span>
            </div>
        </PageCountWrapper>
    );
};
