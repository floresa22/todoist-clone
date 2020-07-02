import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { Sidebar } from "../components/layout/Sidebar";

jest.mock("../context", () => ({
  useSelectedProjectValue: jest.fn(() => ({
    setSelectedProject: jest.fn(() => "INBOX"),
  })),
  useProjectsValue: jest.fn(() => ({
    projects: [
      {
        name: "Work",
        projectId: "1",
        userId: "1212",
        docId: "work-docId",
      },
      {
        name: "Dev",
        projectId: "2",
        userId: "1212",
        docId: "dev-docId",
      },
    ],
    setProjects: jest.fn(() => "1"),
  })),
}));

beforeEach(cleanup);

describe("<Sidebar />", () => {
  describe("Success", () => {
    it("renders the <Sidebar /> component", () => {
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();
    });

    it("sets Inbox as active project using onClick", () => {
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();

      fireEvent.click(queryByTestId("inbox-inner"));
      expect(queryByTestId("inbox").classList.contains("active")).toBeTruthy();
      expect(queryByTestId("today").classList.contains("active")).toBeFalsy();
      expect(queryByTestId("next_7").classList.contains("active")).toBeFalsy();
    });

    it("sets Inbox as active project using onKeyDown", () => {
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("inbox-inner"));
      expect(queryByTestId("inbox").classList.contains("active")).toBeTruthy();
      expect(queryByTestId("today").classList.contains("active")).toBeFalsy();
      expect(queryByTestId("next_7").classList.contains("active")).toBeFalsy();
    });
    it("sets Today as active project using onClick", () => {
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();

      fireEvent.click(queryByTestId("today-inner"));
      expect(queryByTestId("today").classList.contains("active")).toBeTruthy();
      expect(queryByTestId("inbox").classList.contains("active")).toBeFalsy();
      expect(queryByTestId("next_7").classList.contains("active")).toBeFalsy();
    });

    it("sets Today as active project using onKeyDown", () => {
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("today-inner"));
      expect(queryByTestId("today").classList.contains("active")).toBeTruthy();
      expect(queryByTestId("inbox").classList.contains("active")).toBeFalsy();
      expect(queryByTestId("next_7").classList.contains("active")).toBeFalsy();
    });

    it("sets Next 7 days as active project using onClick", () => {
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();

      fireEvent.click(queryByTestId("next_7-inner"));
      expect(queryByTestId("next_7").classList.contains("active")).toBeTruthy();
      expect(queryByTestId("inbox").classList.contains("active")).toBeFalsy();
      expect(queryByTestId("today").classList.contains("active")).toBeFalsy();
    });

    it("sets Next 7 days as active project using onKeyDown", () => {
      const { queryByTestId } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("next_7-inner"));
      expect(queryByTestId("next_7").classList.contains("active")).toBeTruthy();
      expect(queryByTestId("inbox").classList.contains("active")).toBeFalsy();
      expect(queryByTestId("today").classList.contains("active")).toBeFalsy();
    });

    it("toggles between showing all projects in the sidebar using onClick", () => {
      const { queryByTestId, queryByText, getByText } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();

      fireEvent.click(queryByTestId("toggle-projects-sidebar"));
      expect(queryByTestId("add-project")).toBeFalsy();

      fireEvent.click(queryByTestId("toggle-projects-sidebar"));
      expect(queryByText("Add Project")).toBeTruthy();
    });

    it("toggles between showing all projects in the sidebar using onKeyDown", () => {
      const { queryByTestId, queryByText, getByText } = render(<Sidebar />);
      expect(queryByTestId("sidebar")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("toggle-projects-sidebar"));
      expect(queryByTestId("add-project")).toBeFalsy();

      fireEvent.keyDown(queryByTestId("toggle-projects-sidebar"));
      expect(queryByText("Add Project")).toBeTruthy();
    });
  });
});
