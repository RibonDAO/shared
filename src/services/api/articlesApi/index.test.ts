import articlesApi from ".";
import api from "..";

describe("articlesApi", () => {
  describe("#getArticlesList", () => {
    const params = { page: 1, per: 10, sort: "published_at", sort_dir: "desc" };

    beforeEach(() => {
      api.get = jest.fn();
    });

    it("expects to send a get request with the correct info: url, params and headers", () => {
      articlesApi.getArticlesList({});

      expect(api.get).toHaveBeenCalledWith("/api/v1/news/articles", {
        params,
      });
    });
  });
});
