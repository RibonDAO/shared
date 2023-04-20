import { AxiosResponse } from "axios";
import LegacyUserImpact from "types/entities/LegacyUserImpact";
import { apiGet } from "..";

const legacyImpactApi = {
  getImpact: (id: number | null): Promise<AxiosResponse<LegacyUserImpact[]>> =>
    apiGet(`users/${id}/legacy_impacts`),
};

export default legacyImpactApi;
