import QUERY_KEY_NAMESPACE from "queries/queryKeyNameSpace";

export const userKey = {
  user: (userName: string) => [QUERY_KEY_NAMESPACE.User, "user", userName] as const,
  users: [QUERY_KEY_NAMESPACE.User, "users"] as const,
};
