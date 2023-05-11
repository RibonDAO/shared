import { AxiosResponse } from "axios";
import LegacyUserImpact from "types/entities/LegacyUserImpact";
import LegacyContribution from "types/entities/LegacyContribution";
import { apiGet } from "..";

const legacyImpactApi = {
  getImpact: (id: number | null): Promise<AxiosResponse<LegacyUserImpact[]>> =>
    apiGet(`users/${id}/legacy_impacts`),
  getContributions: (id: number | null): Promise<AxiosResponse<LegacyContribution[]>> =>
      apiGet(`users/${id}/legacy_contributions`),
};

export default legacyImpactApi;
