import React from "eact";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { ListTables } from "./ListTables.js";
import StudentServices from "@/services/StudentServices";
import {jest} from "jest"

jest.mock("@/services/StudentServices");

describe("ListTables component", () => {
  it("renders table with student data", async () => {
    const students = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        college: "Computer Science",
        percentage: 90,
        activeStudent: true,
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        email: "janedoe@example.com",
        college: "Engineering",
        percentage: 85,
        activeStudent: false,
      },
    ];

    StudentServices.getAllStudents.mockResolvedValue({ data: students });

    const { getByText } = render(<ListTables />);

    await waitFor(() => getByText("Student List"));

    expect(getByText("John")).toBeInTheDocument();
    expect(getByText("Doe")).toBeInTheDocument();
    expect(getByText("johndoe@example.com")).toBeInTheDocument();
    expect(getByText("Computer Science")).toBeInTheDocument();
    expect(getByText("90")).toBeInTheDocument();
    expect(getByText("TRUE")).toBeInTheDocument();

    expect(getByText("Jane")).toBeInTheDocument();
    expect(getByText("Doe")).toBeInTheDocument();
    expect(getByText("janedoe@example.com")).toBeInTheDocument();
    expect(getByText("Engineering")).toBeInTheDocument();
    expect(getByText("85")).toBeInTheDocument();
    expect(getByText("FALSE")).toBeInTheDocument();
  });

  it("renders error message when API call fails", async () => {
    StudentServices.getAllStudents.mockRejectedValue(new Error("API error"));

    const { getByText } = render(<ListTables />);

    await waitFor(() => getByText("Error: API error"));

    expect(getByText("Error: API error")).toBeInTheDocument();
  });
});
