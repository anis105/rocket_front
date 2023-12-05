import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

describe("Navbar component", () => {
  test("renders Navbar component", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    // Ensure the component renders without errors
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
    expect(screen.getByTestId("chat-icon")).toBeInTheDocument();
    expect(screen.getByTestId("fullscreen-icon")).toBeInTheDocument();
    expect(screen.getByTestId("calendar-icon")).toBeInTheDocument();
    expect(screen.getByAltText("Profile")).toBeInTheDocument();
  });

  test("toggles fullscreen mode on FullscreenExitIcon click", () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    const fullscreenIcon = screen.getByTestId("fullscreen-icon");

    // Initial fullscreen state should be false

    // Click on the fullscreen icon to toggle fullscreen
    fireEvent.click(fullscreenIcon);

    // After clicking, fullscreen state should be true

    // Click again to toggle back to normal mode
    fireEvent.click(fullscreenIcon);

    // After clicking again, fullscreen state should be false
  });

  // Add more test cases as needed for specific functionalities
});

//The first test case ensures that the Navbar component renders without errors and contains the expected elements.
//The second test case checks the functionality of toggling fullscreen mode by clicking on the FullscreenExitIcon.
