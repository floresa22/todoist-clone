import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { Projects } from "../components/Projects";
// import { useProjectsValue } from "../context";

beforeEach(cleanup);

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
        docId: "docId-value",
      },
    ],
  })),
}));

describe("<Projects />", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Success", () => {
    it("renders the projects", () => {
      const { queryByTestId } = render(<Projects />);

      expect(queryByTestId("project-action")).toBeTruthy();
    });

    it("renders the projects with a project using onClick", () => {
      const { queryByTestId } = render(<Projects activeValue="1" />);
      expect(queryByTestId("project-action")).toBeTruthy();

      fireEvent.click(queryByTestId("project-action"));
      expect(
        queryByTestId("project-action-parent").classList.contains("active")
      ).toBeTruthy();
    });

    it("renders the projects with a project using onKeyDown", () => {
      const { queryByTestId } = render(<Projects activeValue="1" />);
      expect(queryByTestId("project-action")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("project-action"));
      expect(
        queryByTestId("project-action-parent").classList.contains("active")
      ).toBeTruthy();
    });

    it("renders the projects with no active value", () => {
      const { queryByTestId } = render(<Projects activeValue={null} />);
      expect(queryByTestId("project-action")).toBeTruthy();

      fireEvent.click(queryByTestId("project-action"));
      expect(
        queryByTestId("project-action-parent").classList.contains(
          "sidebar__project"
        )
      ).toBeTruthy();
    });
  });
});
