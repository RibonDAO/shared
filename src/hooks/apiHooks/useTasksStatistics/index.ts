import { useApi } from "hooks/useApi";
import usersApi from "services/api/usersApi";
import TasksStatistics from "types/apiResponses/TasksStatistics";

function useTasksStatistics() {
  const { data: tasksStatistics } = useApi<TasksStatistics>({
    key: "tasksStatistics",
    fetchMethod: () => usersApi.getTasksStatistics(),
  });

  async function completeAllTasks() {
    const { data } = await usersApi.postCompletedAllTasks();

    return data;
  }

  async function updateStreak() {
    const { data } = await usersApi.postUpdateStreak();

    return data;
  }

  return {
    tasksStatistics,
    completeAllTasks,
    updateStreak,
  };
}

export default useTasksStatistics;
