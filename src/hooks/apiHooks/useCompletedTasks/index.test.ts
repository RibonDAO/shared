import { renderHook } from "@testing-library/react-hooks";
import usersApi from "services/api/usersApi";
import useCompletedTasks from ".";

describe("useCompletedTasks", () => {
  let hook: ReturnType<typeof useCompletedTasks>;

  const singleTask = {
    id: 1,
    taskIdentifier: "task-identifier",
    lastCompletedAt: "2021-01-01T00:00:00.000Z",
    timesCompleted: 1,
  };

  const data = [singleTask];

  beforeEach(() => {
    const { result } = renderHook(() => useCompletedTasks());
    hook = result.current;
  });

  describe("#findCompletedTasks", () => {
    beforeEach(() => {
      usersApi.getCompletedTasks = jest.fn(() => ({ data } as any));
    });

    it("calls the usersApi searchUser with correct params", () => {
      hook.findCompletedTasks();

      expect(usersApi.getCompletedTasks).toHaveBeenCalled();
    });

    it("returns the data fetched from the api", async () => {
      const findResultResult = await hook.findCompletedTasks();
      expect(findResultResult).toEqual(data);
    });
  });

  describe("#completeTask", () => {
    beforeEach(() => {
      usersApi.postCompleteTask = jest.fn(() => ({ data } as any));
    });

    it("calls the usersApi createUser with correct params", () => {
      hook.completeTask("task-identifier");

      expect(usersApi.postCompleteTask).toHaveBeenCalledWith("task-identifier");
    });
  });
});
