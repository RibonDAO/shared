import usersApi from ".";
import api from "..";

describe("usersApi", () => {
  describe("#postAuthenticate", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      usersApi.postAuthenticate("kjjdwkeiondwmlwk", "google_oauth2_access");

      expect(api.post).toHaveBeenCalledWith("/users/v1/auth/authenticate", {
        token: "kjjdwkeiondwmlwk",
        provider: "google_oauth2_access",
      });
    });
  });

  describe("#postRefreshToken", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      usersApi.postRefreshToken("nwkdnwmimedlk");

      expect(api.post).toHaveBeenCalledWith("/users/v1/auth/refresh_token", {
        refreshToken: "nwkdnwmimedlk",
      });
    });
  });

  describe("#postAuthorizeFromAuthToken", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      usersApi.postAuthorizeFromAuthToken("dknjkdnwnej", "1");

      expect(api.post).toHaveBeenCalledWith(
        "/users/v1/auth/authorize_from_auth_token",
        {
          authToken: "dknjkdnwnej",
          id: "1",
        },
      );
    });
  });

  describe("#postSendAuthenticationEmail", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      usersApi.postSendAuthenticationEmail("user@gmail.com");

      expect(api.post).toHaveBeenCalledWith(
        "/users/v1/auth/send_authentication_email",
        {
          email: "user@gmail.com",
        },
      );
    });
  });

  describe("#postSendOtpEmail", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      usersApi.postSendOtpEmail("user@gmail.com");

      expect(api.post).toHaveBeenCalledWith("/users/v1/auth/send_otp_email", {
        email: "user@gmail.com",
      });
    });
  });

  describe("#postAuthorizeFromOtpCode", () => {
    beforeEach(() => {
      api.post = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      usersApi.postAuthorizeFromOtpCode("012345", "1");

      expect(api.post).toHaveBeenCalledWith(
        "/users/v1/auth/authorize_from_otp_code",
        {
          otpCode: "012345",
          id: "1",
        },
      );
    });
  });
});
