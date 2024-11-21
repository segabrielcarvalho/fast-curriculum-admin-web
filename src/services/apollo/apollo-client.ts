import clientConfig from '@/config/client';
import settings from '@/config/settings';
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import {
  getMainDefinition,
  offsetLimitPagination,
} from '@apollo/client/utilities';
import { parseCookies } from 'nookies';

const httpLink = createHttpLink({
  uri: clientConfig.apiGraphqlUrl,
  credentials: 'same-origin',
});

const authLink = setContext((_, { headers }) => {
  const cookies = parseCookies();
  const token = cookies[settings.tokenKey];
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
    networkError.message = 'Não foi possível conectar ao servidor';
  }
});

const splitLink =
  typeof window !== 'undefined'
    ? split(({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      }, authLink.concat(httpLink))
    : authLink.concat(httpLink);

export const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: errorLink.concat(splitLink),
    cache: new InMemoryCache({
      typePolicies: {
        Query: { fields: { notifications: offsetLimitPagination() } },
      },
    }),
  });
};
