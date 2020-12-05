import React from "react";
import { Provider } from 'react-redux'
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Neede because of NavLinks
import NavigationMenu from "./NavigationMenu";
import store from '../store';

const renderWrapper = () => {
  return render(<Provider store={store}>
    <Router>
        <NavigationMenu />
      </Router>
  </Provider>)
} 

describe("Navigation component", () => {
  it("renders Home link", () => {
    const { getByText } = renderWrapper();
    const element = getByText(/Home/g);
    expect(element).toBeInTheDocument();
  });

  it("renders Login link", () => {
    const { getByText } = renderWrapper();
    const element = getByText(/Login/g);
    expect(element).toBeInTheDocument();
  });

  it("renders Register link", () => {
    const { getByText } = renderWrapper();
    const element = getByText(/Register/g);
    expect(element).toBeInTheDocument();
  });
});
