import QUERY_KEY_NAMESPACE from "queries/queryKeyNameSpace";

export const userKey = {
  user: (userName: string) => [QUERY_KEY_NAMESPACE.User, "user", userName] as const,
  users: [QUERY_KEY_NAMESPACE.User, "users"] as const,
  repositories: (userName: string) => [QUERY_KEY_NAMESPACE.User, "repositories", userName] as const,
  followers: (userName: string) => [QUERY_KEY_NAMESPACE.User, "followers", userName] as const,
  following: (userName: string) => [QUERY_KEY_NAMESPACE.User, "following", userName] as const,
};
