import React, { ReactElement } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { setSearchAction } from '../store/actions';
import { selectSearchTerm } from '../store/selctors';

const InputWrapper = styled.div`
  display: flex;
`;

const Input = styled.input`
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

const Search = (): ReactElement => {
  const dispatch = useDispatch();
  const value = useSelector(selectSearchTerm);
  const searchFunction = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchAction(value));
  };
  return (
    <InputWrapper>
      <Input
        name="search"
        placeholder="Search..."
        aria-label="search"
        onChange={searchFunction}
        value={value}
      />
    </InputWrapper>
  );
};
export default Search;
