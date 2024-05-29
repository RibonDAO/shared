import { AxiosResponse } from "axios";
import Tag from "types/apiResponses/Tag";
import { apiGet } from "..";

const tagsApi = {
  getTags: (): Promise<AxiosResponse<Tag[]>> => apiGet("tags"),
};

export default tagsApi;
