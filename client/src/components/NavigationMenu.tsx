import React, { useCallback } from 'react';
import styled from 'styled-components';
import { NavLink as NLink, NavLinkProps } from 'react-router-dom';
import { isUserAuthenticated } from '../store/selctors';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../store/actions';

export const NavigationMenuOuterWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: #333;
    margin-bottom: 2rem;
`;

export const NavigationMenuInnerWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 80vw;
    margin: 0 auto;
    @media (max-width: 1024px) {
        width: 100vw;
    }
`;

export const NavLink = styled(NLink)<NavLinkProps>`
    color: black;
    text-decoration: none;
    padding: 1rem 2rem;
    border: 1px solid orange;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    transition: all 0.3s ease-in-out;
    :hover {
        box-shadow: inset 10px -20px 30px -32px rgba(58, 25, 1, 1);
    }
    &.active {
        background-color: orange;
        :hover {
            box-shadow: inset 10px -20px 30px -32px black;
        }
    }

    :active {
        border: 1px solid #3a1901;
    }
`;

export const Button = styled.button`
    color: black;
    text-decoration: none;
    padding: 1rem 2rem;
    border: 1px solid orange;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    transition: all 0.3s ease-in-out;
    font-size: 2rem;
    line-height: 100%;
    cursor: pointer;
    :hover {
        box-shadow: inset 10px -20px 30px -32px rgba(58, 25, 1, 1);
    }
    &.active {
        background-color: orange;
        :hover {
            box-shadow: inset 10px -20px 30px -32px black;
        }
    }

    :active {
        border: 1px solid #3a1901;
    }
`;

const NavigationMenu: React.FC = () => {
    const isAuthenticated = useSelector(isUserAuthenticated);
    const dispatch = useDispatch();

    const onClick = useCallback(() => {
        dispatch(logoutAction());
    }, [dispatch]);
    
    return (
        <NavigationMenuOuterWrapper>
            <NavigationMenuInnerWrapper>
                <NavLink exact to='/'>
                    Home
                </NavLink>
                {!isAuthenticated && <>
                    <NavLink exact to='/login'>
                        Login
                    </NavLink>
                    <NavLink exact to='/register'>
                        Register
                    </NavLink>
                </>}
                {isAuthenticated && <>
                    <NavLink to='/movies'>Movies</NavLink>
                    <NavLink to='/tv-shows'>TV Shows</NavLink>
                    <Button onClick={onClick}>Logout</Button>
                </>}
            </NavigationMenuInnerWrapper>
        </NavigationMenuOuterWrapper>
    );
};

export default NavigationMenu;
