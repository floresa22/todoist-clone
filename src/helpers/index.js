import { collatedTasks } from "../constants";

export const getCollatedTasksExist = (selecteProject) =>
  collatedTasks.find((task) => task.key === selecteProject);
