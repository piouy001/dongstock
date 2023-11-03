import useUsersQuery from "queries/user/useUsersQuery";

const useInteractor = () => {
  // Fetch all data you need for the screen.
  const query = useUsersQuery();

  return { users: query.data ?? [] };
};

export default useInteractor;
