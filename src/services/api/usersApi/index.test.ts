import usersApi from ".";
import api from "..";

describe("usersApi", () => {
  describe("#postCreateUser", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      usersApi.postCreateUser("user@test.com", "en-US");

      expect(api.post).toHaveBeenCalledWith("/api/v1/users", {
        email: "user@test.com",
        language: "en-US",
      });
    });
  });

  describe("#postSearchUser", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      usersApi.postSearchUser("user@test.com");

      expect(api.post).toHaveBeenCalledWith("/api/v1/users/search", {
        email: "user@test.com",
      });
    });
  });

  describe("#postCanDonate", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      usersApi.postCanDonate(1, "app");

      expect(api.post).toHaveBeenCalledWith("/api/v1/users/can_donate", {
        integrationId: 1,
        platform: "app",
      });
    });
  });

  describe("#postCompleteTask", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      usersApi.postCompleteTask("identifier");

      expect(api.post).toHaveBeenCalledWith("/api/v1/users/complete_task", {
        taskIdentifier: "identifier",
      });
    });
  });

  describe("#postSendDeleteAccountEmail", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request", () => {
      usersApi.postSendDeleteAccountEmail();

      expect(api.post).toHaveBeenCalledWith(
        "/api/v1/users/send_delete_account_email",
        {},
      );
    });
  });

  describe("#deleteUser", () => {
    beforeEach(() => {
      api.delete = jest.fn();
    });

    it("expects to send a get request", () => {
      usersApi.deleteUser("jwt_token");

      expect(api.delete).toHaveBeenCalledWith("/api/v1/users?token=jwt_token", {});
    });
  });
});
