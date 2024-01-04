import { useApi } from "hooks/useApi";
import userProfileApi from "services/user/userProfileApi";
import UserProfile from "types/entities/UserProfile";

function useUserProfile() {
  function userProfile() {
    const {
      refetch,
      isLoading,
      data: profile,
    } = useApi<UserProfile>({
      key: "UserProfile",
      fetchMethod: () => userProfileApi.getUserProfile(),
      options: { retry: 3 },
    });

    return { profile, refetch, isLoading };
  }

  return {
    userProfile,
  };
}

export default useUserProfile;
