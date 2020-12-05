import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import Search from "./Search";
import { rootReducer } from "../store/reducers";

// Hoist helper functions (but not vars) to reuse between test cases
const setup = (searchTerm: string = "") => {
  const utils = render(
    <Provider
      store={createStore(rootReducer, {
        search: {
          searchTerm
        }
      })}
    >
      <Search />
    </Provider>
  );
  const input = utils.getByLabelText("search");
  return {
    input,
    ...utils
  };
};

describe("Search component", () => {
  it("renders input element", () => {
    const { input }: any = setup();
    expect(input).toBeInTheDocument();
  });

  it("call search function", () => {
    const { input }: any = setup();
    fireEvent.change(input, { target: { value: "abc" } });
    expect(input.value).toBe("abc");
  });
});
