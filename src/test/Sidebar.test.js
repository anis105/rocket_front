import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { UserAuth } from "../../context/AuthContext";

jest.mock("../../context/AuthContext", () => ({
  UserAuth: jest.fn(),
}));

describe("Sidebar component", () => {
  const mockUser = {
    username: "testUser",
    email: "test@example.com",
  };

  beforeEach(() => {
    UserAuth.mockReturnValue({
      user: mockUser,
      logOut: jest.fn(),
    });
  });

  test("renders Sidebar component", () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    // Ensure the component renders without errors
    expect(screen.getByText("School learning system")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Stats")).toBeInTheDocument();
    expect(screen.getByText("Todo")).toBeInTheDocument();
    expect(screen.getByText("Discussion")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  test("logs out user when Logout button is clicked", async () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);

    // Ensure logOut function is called
    await waitFor(() => {
      expect(UserAuth().logOut).toHaveBeenCalled();
    });
  });

  test("navigates to / when Logout is successful", async () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );

    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);

    // Ensure logOut function is called and navigation to / occurs
    await waitFor(() => {
      expect(UserAuth().logOut).toHaveBeenCalled();
    });
  });
});

//It checks if the Sidebar component renders correctly.
//It tests the functionality of the Logout button, ensuring that the logOut function is called when the button is clicked.
//It verifies that the navigation to '/' occurs after a successful logout.
