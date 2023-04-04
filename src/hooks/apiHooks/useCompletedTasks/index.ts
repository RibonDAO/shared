import usersApi from "services/api/usersApi";

function useCompletedTasks() {
  async function findCompletedTasks() {
    const { data: tasks } = await usersApi.getCompletedTasks();

    return tasks;
  }

  async function completeTask(taskIdentifier: string) {
    const { data: task } = await usersApi.postCompleteTask(taskIdentifier);

    return task;
  }

  return {
    findCompletedTasks,
    completeTask,
  };
}

export default useCompletedTasks;
