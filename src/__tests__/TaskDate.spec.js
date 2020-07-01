import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { TaskDate } from "../components/TaskDate";

beforeEach(cleanup);

describe("<TaskDate />", () => {
  describe("Success", () => {
    it("selects option today using onClick", () => {
      const setTaskDate = jest.fn();
      const showTaskDate = true;
      const setShowTaskDate = jest.fn(() => !showTaskDate);

      const { queryByTestId } = render(
        <TaskDate
          setTaskDate={setTaskDate}
          showTaskDate
          setShowTaskDate={setShowTaskDate}
        />
      );
      expect(queryByTestId("task-date-overlay")).toBeTruthy();
      fireEvent.click(queryByTestId("task-date-today"));
      expect(setShowTaskDate).toHaveBeenCalled();
    });
    it("selects option today using onKeyDown", () => {
      const setTaskDate = jest.fn();
      const showTaskDate = true;
      const setShowTaskDate = jest.fn(() => !showTaskDate);

      const { queryByTestId } = render(
        <TaskDate
          setTaskDate={setTaskDate}
          showTaskDate
          setShowTaskDate={setShowTaskDate}
        />
      );
      expect(queryByTestId("task-date-overlay")).toBeTruthy();
      fireEvent.keyDown(queryByTestId("task-date-today"));
      expect(setShowTaskDate).toHaveBeenCalled();
    });

    it("selects option tomorrow using onClick", () => {
      const setTaskDate = jest.fn();
      const showTaskDate = true;
      const setShowTaskDate = jest.fn(() => !showTaskDate);

      const { queryByTestId } = render(
        <TaskDate
          setTaskDate={setTaskDate}
          showTaskDate
          setShowTaskDate={setShowTaskDate}
        />
      );
      expect(queryByTestId("task-date-overlay")).toBeTruthy();
      fireEvent.click(queryByTestId("task-date-tomorrow"));
      expect(setShowTaskDate).toHaveBeenCalled();
    });

    it("selects option tomorrow using onKeyDown", () => {
      const setTaskDate = jest.fn();
      const showTaskDate = true;
      const setShowTaskDate = jest.fn(() => !showTaskDate);

      const { queryByTestId } = render(
        <TaskDate
          setTaskDate={setTaskDate}
          showTaskDate
          setShowTaskDate={setShowTaskDate}
        />
      );
      expect(queryByTestId("task-date-overlay")).toBeTruthy();
      fireEvent.keyDown(queryByTestId("task-date-tomorrow"));
      expect(setShowTaskDate).toHaveBeenCalled();
    });

    it("selects option next week using onClick", () => {
      const setTaskDate = jest.fn();
      const showTaskDate = false;
      const setShowTaskDate = jest.fn(() => !showTaskDate);

      const { queryByTestId } = render(
        <TaskDate
          setTaskDate={setTaskDate}
          showTaskDate
          setShowTaskDate={setShowTaskDate}
        />
      );
      expect(queryByTestId("task-date-overlay")).toBeTruthy();
      fireEvent.click(queryByTestId("task-date-next-week"));
      expect(setShowTaskDate).toHaveBeenCalled();
    });

    it("selects option next week using onKeyDown", () => {
      const setTaskDate = jest.fn();
      const showTaskDate = false;
      const setShowTaskDate = jest.fn(() => !showTaskDate);

      const { queryByTestId } = render(
        <TaskDate
          setTaskDate={setTaskDate}
          showTaskDate
          setShowTaskDate={setShowTaskDate}
        />
      );
      expect(queryByTestId("task-date-overlay")).toBeTruthy();
      fireEvent.keyDown(queryByTestId("task-date-next-week"));
      expect(setShowTaskDate).toHaveBeenCalled();
    });
  });
});
