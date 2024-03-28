import userIntegrationsApi from "services/user/userIntegrationsApi";
import Integration from "types/entities/Integration";
import { useUploadFile } from "../useUploadFile";

function useUserIntegration() {
  async function getUserIntegration() {
    const { data: integration } = await userIntegrationsApi.getIntegration();

    return integration;
  }

  async function createUserIntegration(data: Integration, file: string) {
    const upload = useUploadFile(data.logo);

    let integration;

    if (file) {
      upload.create(async (error: Error, blob: any) => {
        if (error) {
          throw error;
        } else {
          integration = await userIntegrationsApi.createIntegration({
            ...data,
            logo: blob.signed_id,
          });
        }
      });
    } else {
      integration = await userIntegrationsApi.createIntegration(data);
    }
    return integration;
  }

  return {
    getUserIntegration,
    createUserIntegration,
  };
}

export default useUserIntegration;
