import { ApolloClient, InMemoryCache } from "@apollo/client";
import { baseUrl } from "shared/const/apiUrl";

export const apolloClient = new ApolloClient({
  uri: baseUrl,
  cache: new InMemoryCache(),
});
