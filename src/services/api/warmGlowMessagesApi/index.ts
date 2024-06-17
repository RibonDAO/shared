import { AxiosResponse } from "axios";
import { WarmGlowMessage } from "types/entities/WarmGlowMessage";
import { apiGet } from "..";

const warmGlowMessagesApi = {
  getRandomWarmGlowMessage: (): Promise<AxiosResponse<WarmGlowMessage>> =>
    apiGet("warmglow_messages/random_message"),
};

export default warmGlowMessagesApi;
