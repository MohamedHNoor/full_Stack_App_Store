import { useQuery } from 'react-query';

const useUser = () => {
  const { data, isLoading, isError, refetch } = useQuery('user', async () => {
    try {
      const userDetail = await getAuthenticatedUser();
      return userDetail;
    } catch (error) {
      console.log(error);
    }
  });
};
