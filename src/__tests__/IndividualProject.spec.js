import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { IndividualProject } from "../components/IndividualProject";

beforeEach(cleanup);

jest.mock("../Firebase", () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        doc: jest.fn(() => ({
          delete: jest.fn(() => Promise.resolve("Delete value")),
          update: jest.fn(),
        })),
      })),
    })),
  },
}));

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
    setProjects: jest.fn(() => "1"),
  })),
}));

describe("<IndividualProject />", () => {
  const project = {
    name: "Work",
    projectId: "1",
    userId: "1212",
    docId: "docId-value",
  };

  describe("Success", () => {
    it("renders an individual project", () => {
      const { getByText } = render(<IndividualProject project={project} />);
      expect(getByText("Work")).toBeTruthy();
    });

    it("renders delete overlay and then deletes project using onClick", () => {
      const { queryByTestId, getByText } = render(
        <IndividualProject project={project} />
      );

      fireEvent.click(queryByTestId("delete-project"));
      expect(
        getByText("Are you sure you want to delete this project?")
      ).toBeTruthy();

      fireEvent.click(getByText("Delete"));
    });

    it("renders delete overlay and then cancels using onClick", () => {
      const { queryByTestId, getByText } = render(
        <IndividualProject project={project} />
      );

      fireEvent.click(queryByTestId("delete-project"));
      expect(
        getByText("Are you sure you want to delete this project?")
      ).toBeTruthy();

      fireEvent.click(getByText("Cancel"));
    });

    it("renders delete overlay and then cancels using onKeyDown", () => {
      const { queryByTestId, getByText } = render(
        <IndividualProject project={project} />
      );

      fireEvent.keyDown(queryByTestId("delete-project"));
      expect(
        getByText("Are you sure you want to delete this project?")
      ).toBeTruthy();

      fireEvent.keyDown(getByText("Cancel"));
    });
  });
});
