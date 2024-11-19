import clientConfig from '@/config/client';
import settings from '@/config/settings';
import {
  ApolloClient,
  ApolloLink,
  DocumentNode,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { offsetLimitPagination } from '@apollo/client/utilities';
import { GetServerSidePropsContext } from 'next';
import { NextRequest } from 'next/server';
import nookies, { parseCookies } from 'nookies';

interface ApolloClientOptions {
  context?: GetServerSidePropsContext;
  token?: string;
}

function createServerSideApolloClient({ context, token }: ApolloClientOptions) {
  const httpLink = new HttpLink({ uri: clientConfig.apiGraphqlUrl });

  const authLink = setContext((_, { headers }) => {
    const cookies = context ? nookies.get(context) : parseCookies();
    const authToken = token || cookies[settings.tokenKey];
    return {
      headers: {
        ...headers,
        authorization: authToken ? `Bearer ${authToken}` : '',
      },
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(error => {
        console.error(
          `[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}, Operation: ${operation.operationName}`,
        );
      });
    }
    if (networkError) {
      console.error(
        `[Network error]: ${networkError}, Operation: ${operation.operationName}`,
      );
      networkError.message =
        'Network error: Não foi possível conectar ao servidor';
    }
  });

  const link = ApolloLink.from([errorLink, authLink, httpLink]);

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link,
    cache: new InMemoryCache({
      typePolicies: {
        Query: { fields: { notifications: offsetLimitPagination() } },
      },
    }),
  });
}

export async function fetchSSRData<T>(
  query: DocumentNode,
  request?: NextRequest,
): Promise<{ data?: T; unauthorized?: boolean }> {
  try {
    const token = request?.cookies.get(settings.tokenKey)?.value;
    const client = createServerSideApolloClient({ token });
    const queryResult = await client.query<T>({ query });
    return queryResult;
  } catch (error: any) {
    if (error.message === 'Unauthorized') return { unauthorized: true };
    throw error;
  }
}
