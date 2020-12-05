import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: orange;
    color: white;
    font-size: 2rem;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 4px;
    box-shadow: 0 0 8px 0 black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
    outline: none;

    :hover {
        box-shadow: 0 0 12px 0 black;
        border-radius: 6px;
    }

    :active {
        border: 1px solid #3a1901;
    }
`;

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children }) => (
    <StyledButton>
        {children}
    </StyledButton>
);
