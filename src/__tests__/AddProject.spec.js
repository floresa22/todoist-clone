import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { AddProject } from "../components/AddProject";

jest.mock("../context", () => ({
  useSelectedProjectValue: jest.fn(),
  useProjectsValue: jest.fn(() => ({
    projects: [
      {
        name: "Work",
        projectId: "1",
        userId: "1212",
        docId: "Inbox-doc",
      },
      {
        name: "Dev",
        projectId: "2",
        userId: "1212",
        docId: "dev-doc",
      },
      {
        name: "Music",
        projectId: "3",
        userId: "1212",
        docId: "music-doc",
      },
    ],
    setProjects: jest.fn(),
  })),
}));

jest.mock("../Firebase", () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        add: jest.fn(() => Promise.resolve("resolved promise!")),
      })),
    })),
  },
}));

beforeEach(cleanup);

describe("<AddProject />", () => {
  describe("Success", () => {
    it("render <AddProject />", () => {
      const { queryByTestId } = render(<AddProject />);
      expect(queryByTestId("add-project")).toBeTruthy();
    });

    it("renders <AddProject /> and adds a project using onClick", () => {
      const { queryByTestId } = render(<AddProject shouldShow />);
      expect(queryByTestId("add-project")).toBeTruthy();

      fireEvent.change(queryByTestId("project-name"), {
        target: { value: "Here is a new project!" },
      });
      expect(queryByTestId("project-name").value).toBe(
        "Here is a new project!"
      );
      fireEvent.click(queryByTestId("add-project-submit"));
    });

    it("hides the project overlay when cancelled using onClick", () => {
      const { queryByTestId, getByText } = render(<AddProject shouldShow />);
      expect(queryByTestId("add-project")).toBeTruthy();
      expect(queryByTestId("add-project-inner")).toBeTruthy();

      fireEvent.click(getByText("Cancel"));
      expect(queryByTestId("add-project")).toBeTruthy();
      expect(queryByTestId("add-project-inner")).toBeFalsy();
    });

    it("hides the project overlay when cancelled using onKeyDown", () => {
      const { queryByTestId, getByText } = render(<AddProject shouldShow />);
      expect(queryByTestId("add-project")).toBeTruthy();
      expect(queryByTestId("add-project-inner")).toBeTruthy();

      fireEvent.keyDown(getByText("Cancel"));
      expect(queryByTestId("add-project")).toBeTruthy();
      expect(queryByTestId("add-project-inner")).toBeFalsy();
    });

    it("hides the project overlay using onClick singular and reverse action", () => {
      const { queryByTestId } = render(<AddProject shouldShow />);
      expect(queryByTestId("add-project")).toBeTruthy();
      expect(queryByTestId("add-project-inner")).toBeTruthy();

      fireEvent.click(queryByTestId("add-project-action"));
      expect(queryByTestId("add-project")).toBeTruthy();
      expect(queryByTestId("add-project-inner")).toBeFalsy();
    });

    it("hides the project overlay using onKeyDown singular and reverse action", () => {
      const { queryByTestId } = render(<AddProject shouldShow />);
      expect(queryByTestId("add-project")).toBeTruthy();
      expect(queryByTestId("add-project-inner")).toBeTruthy();

      fireEvent.keyDown(queryByTestId("add-project-action"));
      expect(queryByTestId("add-project")).toBeTruthy();
      expect(queryByTestId("add-project-inner")).toBeFalsy();
    });
  });
});
